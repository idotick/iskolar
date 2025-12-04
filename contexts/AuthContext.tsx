import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Redirect } from "expo-router";

import { validateSession } from "@/handlers/Session";
import SplashScreen from "@/screens/SplashScreen";

export default function AuthProvider( { children }: any){
    const [ authenticated, setAuthenticated ] = useState<boolean>(false);

    const [ loaded, setLoaded ] = useState<boolean>(false);

    async function authenticate(){
        const code: number = await validateSession();

        setAuthenticated(code == 0);
        setLoaded(true);
    }

    useEffect(() => {
        authenticate();
    }, []);

    if (!loaded){
        return <SplashScreen/>
    }

    if (!authenticated){
        return <Redirect href={"/(auth)/signin"}/>
    }

    return (<View style={styles.container}>
        { children }
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
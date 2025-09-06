import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Redirect } from "expo-router";

import { validate_session } from "@/handlers/session";
import SplashScreen from "@/screens/SplashScreen";

export default function AuthProvider( { children }: any){
    const [ authenticated, set_authenticated ] = useState<boolean>(false);

    const [ loaded, set_loaded ] = useState<boolean>(false);

    async function authenticate(){
        const validated: boolean = await validate_session();

        set_authenticated(validated);
        set_loaded(true);
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
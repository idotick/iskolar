import LoginPage from "@/app/login";
import { validate_session } from "@/handlers/session";
import SplashScreen from "@/screens/SplashScreen";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

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
        return <LoginPage/>
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
import { useEffect, useState } from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Link, Redirect } from 'expo-router';

import { Image, ImageBackground } from 'expo-image';

import { FormInput } from '@/components/form/Input';
import AuthButton from '@/components/form/AuthButton';
import PageContainer from '@/components/containers/PageContainer';
import AuthAlert from '@/components/alerts/AuthAlert';

import { LoginData, requestLogin } from '@/handlers/session';

import { validateEmail } from '@/util/helpers';

const background_image = require('@/assets/images/background.jpg');
const title_text = require('@/assets/images/iskolar-text.png');
const ribbon = require('@/assets/images/ribbon.svg');

export default function LoginScreen() {
	const [data, setData] = useState<LoginData>({
        email: "",
        password: "",
    });

    function setLoginField(field: keyof LoginData, value: string) {
        setData({...data, [field]: value});
    }

    const [authenticated, set_authenticated] = useState<boolean>(false);

    const [alert, set_alert] = useState<string>("");

    const stopAlert = () => {
        set_alert("");
    }

    const startAlert = (message: string) => {
        set_alert(message);

        setTimeout(stopAlert, 2000);
    }

    const onLogin = async () => {
        const code = await requestLogin(data);

        if (code == -1){
            startAlert("Unable to connect to network.");
            return;
        }

        if (code){
            return;
        }

        set_authenticated(true);
    }

    if (authenticated){
        return <Redirect href="/"/>
    }

	return (
		<PageContainer style={styles.container}>
			<ImageBackground
				source={background_image}
				style={styles.background}
				imageStyle={{ opacity: 0.7 }}
			/>

            <Image source={ribbon} style={styles.ribbon} />
            
            <Image source={title_text} style={styles.title} />

            <FormInput name={"email"} content={data.email} onChange={(value: string) => setLoginField("email", value)}/>
            <FormInput name={"password"} content={data.password} onChange={(value: string) => setLoginField("password", value)} secured/>

            <AuthAlert style={styles.alert} message={alert}/>

            <AuthButton name={"sign in"} onAction={onLogin} style={styles.button} />

            <Link href="/(auth)/signup" style={styles.link}>
                <Text style={styles.link_text}> Don't have an account? </Text>
            </Link>

            
		</PageContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        alignItems: "center"
	},

    background: {
        position: "absolute",

        width: '100%',
		height: '100%',

		paddingHorizontal: 20,
		paddingBottom: 100,
    },

	ribbon: {
		position: 'absolute',

		width: "100%",
		height: "100%",

        top: -200,

		opacity: 0.4
	},

    title: {
        alignSelf: "center",

        width: 240,
		height: 96,

        marginTop: 128,
        marginBottom: 64,
    },

    button: {
        marginTop: 32,
        marginBottom: 64,
    },

    link: {
        alignItems: "center"
    },

    link_text: {
        textAlign: "center",
        fontWeight: "bold",

        color: "white",
    },

    alert: {

    }
})
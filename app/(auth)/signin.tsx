import { useEffect, useState } from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Image, ImageBackground } from 'expo-image';

import { FormInput } from '@/components/form/Input';
import AuthButton from '@/components/form/AuthButton';

import { request_login, validate_session } from '@/handlers/session';
import { Link, Redirect } from 'expo-router';
import { Page } from '@/components/Page';
import PageContainer from '@/components/containers/PageContainer';
import AuthAlert from '@/components/alerts/AuthAlert';
import { extract_domain, validate_email } from '../../util/helpers';

const background_image = require('@/assets/images/background.jpg');
const title_text = require('@/assets/images/iskolar-text.png');
const ribbon = require('@/assets/images/ribbon.svg');

export default function LoginScreen() {
	const [email, set_email ] = useState<string>('');
	const [password, set_password ] = useState<string>('');

    const [authenticated, set_authenticated] = useState<boolean>(false);

    const [alert, set_alert] = useState<string>("");

    const stop_alert = () => {
        set_alert("");
    }

    const start_alert = (message: string) => {
        set_alert(message);

        setTimeout(stop_alert, 2000);
    }

    const on_signin = async () => {
        if (!validate_email(email)){
            start_alert("Invalid email");
            return;
        }

        const code = await request_login(email, password);

        if (code == -1){
            start_alert("Unable to connect to network.");
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

            <FormInput name={"email"} content={email} on_change={set_email}/>
            <FormInput name={"password"} content={password} on_change={set_password} secured/>

            <AuthAlert style={styles.alert} message={alert}/>

            <AuthButton name={"sign in"} on_press={on_signin} style={styles.button} />

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
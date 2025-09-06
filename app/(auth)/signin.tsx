import { useEffect, useState } from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Image, ImageBackground } from 'expo-image';

import { FormInput } from '@/components/Input';
import AuthButton from '@/components/AuthButton';

import { request_login, validate_session } from '@/handlers/session';
import { Redirect } from 'expo-router';

const background_image = require('@/assets/images/background.jpg');
const title_text = require('@/assets/images/iskolar-text.png');
const ribbon = require('@/assets/images/ribbon.svg');

export default function LoginScreen() {
	const [email, set_email ] = useState<string>('');
	const [password, set_password ] = useState<string>('');

    const [authenticated, set_authenticated] = useState<boolean>(false);

    const on_signin = async () => {
        const code = await request_login(email, password);

        if (code){
            return;
        }

        set_authenticated(true);
    }

    if (authenticated){
        return <Redirect href="/"/>
    }

	return (
		<View style={styles.container}>
			<ImageBackground
				source={background_image}
				style={styles.background}
				imageStyle={{ opacity: 0.7 }}
			/>

            <Image source={ribbon} style={styles.ribbon} />
            
            <Image source={title_text} style={styles.title} />

            <FormInput name={"email"} content={email} on_change={set_email}/>
            <FormInput name={"password"} content={password} on_change={set_password} secured/>

            <AuthButton name={"signin"} on_press={on_signin} style={styles.button} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

    background: {
        position: "absolute",

        width: '100%',
		height: '100%',

		paddingHorizontal: 20,
		paddingBottom: 100,

		justifyContent: 'space-evenly',
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
        
        marginVertical: 64,
    }

})
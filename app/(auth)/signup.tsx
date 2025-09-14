import { useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';

import { ImageBackground } from 'expo-image';

import { FormInput, SmallFormInput } from '@/components/form/Input';
import AuthButton from '@/components/form/AuthButton';

import { request_login, request_registration, } from '@/handlers/session';
import { Link, Redirect } from 'expo-router';
import PageContainer from '@/components/containers/PageContainer';

const background_image = require('@/assets/images/background.jpg');

export default function LoginScreen() {
    const [fname, set_fname ] = useState<string>('');
    const [mname, set_mname ] = useState<string>('');
    const [lname, set_lname ] = useState<string>('');

	const [email, set_email ] = useState<string>('');
	
    const [user_id, set_user_id ] = useState<string>('');

    const [password, set_password ] = useState<string>('');
    const [confirmed_password, set_confirmed_password ] = useState<string>('');

    const [authenticated, set_authenticated] = useState<boolean>(false);

    const on_signup = async () => {
        if (password != confirmed_password){
            return;
        }

        const name: string = fname + " " + mname + ". " + lname;

        const code = await request_registration(user_id, name, email, password);

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

            <View style={styles.form}>
                <View style={{alignSelf: "center", flexDirection: "row"}}>
                    <SmallFormInput name={"first name"} content={fname} on_change={set_fname} style={{marginRight: "1%"}}/>
                    <SmallFormInput name={"middle name"} content={mname} on_change={set_mname} style={{marginLeft: "1%"}}/>
                </View>

                <FormInput name={"last name"} content={lname} on_change={set_lname}/>

                <FormInput name={"email"} content={email} on_change={set_email}/>

                <FormInput name={"password"} content={password} on_change={set_password} secured/>
                <FormInput name={"confirm_password"} content={confirmed_password} on_change={set_confirmed_password} secured/>

                <AuthButton name={"sign up"} on_press={on_signup} style={styles.button} />

                <Link href="/(auth)/signin" style={styles.link}>
                    <Text style={styles.link_text}> Already have an account? <Text style={styles.highlighted_link_text}> Sign up. </Text></Text>
                </Link>
            </View>

		</PageContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        alignItems: "center",
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

    form: {
        marginTop: 64,
    },

    button: {
        
        marginVertical: 64,
    },

    link: {
        alignItems: "center"
    },

    link_text: {
        textAlign: "center",
        fontWeight: "bold",

        color: "white",
    },

    highlighted_link_text: {
        textAlign: "center",
        fontWeight: "bold",

        color: "white",
    }

})
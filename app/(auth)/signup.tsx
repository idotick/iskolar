import { useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';

import { ImageBackground } from 'expo-image';

import { FormInput, SmallFormInput } from '@/components/form/Input';
import AuthButton from '@/components/form/AuthButton';

import { requestLogIn, requestRegister, } from '@/handlers/session';
import { Link, Redirect } from 'expo-router';
import PageContainer from '@/components/containers/PageContainer';
import { getFullName } from '@/util/helpers';

const background_image = require('@/assets/images/background.jpg');

export default function RegisterScreen() {
    const [fName, setFName ] = useState<string>('');
    const [mName, setMName ] = useState<string>('');
    const [lName, setLName ] = useState<string>('');

	const [email, setEmail ] = useState<string>('');
	
    const [userID, setUserID ] = useState<string>('14-2021-075');

    const [password, setPassword ] = useState<string>('');
    const [cfPassword, setCFPassword ] = useState<string>('');

    const [authenticated, setAuthenticated] = useState<boolean>(false);

    async function onRegister() {
        if (password != cfPassword){
            return;
        }

        const code = await requestRegister(userID, getFullName(fName, mName, lName), email, password);

        if (code){
            return;
        }

        setAuthenticated(true);
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
                    <SmallFormInput name={"first name"} content={fName} onChange={setFName} style={{marginRight: "1%"}}/>
                    <SmallFormInput name={"middle name"} content={mName} onChange={setMName} style={{marginLeft: "1%"}}/>
                </View>

                <FormInput name={"last name"} content={lName} onChange={setLName}/>

                <FormInput name={"email"} content={email} onChange={setEmail}/>

                <FormInput name={"password"} content={password} onChange={setPassword} secured/>
                <FormInput name={"confirm_password"} content={cfPassword} onChange={setCFPassword} secured/>

                <AuthButton name={"sign up"} onAction={onRegister} style={styles.button} />

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
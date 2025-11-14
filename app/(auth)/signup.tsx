import { useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';

import { Link, Redirect } from 'expo-router';

import { ImageBackground } from 'expo-image';

import { RegistrationData, requestRegister, validateRegistrationData, } from '@/handlers/session';

import { FormInput, SmallFormInput } from '@/components/form/Input';
import AuthButton from '@/components/form/AuthButton';
import PageContainer from '@/components/containers/PageContainer';

const background_image = require('@/assets/images/background.jpg');

export default function RegisterScreen() {
    const [data, setData] = useState<RegistrationData>({
        firstName: "",
        midInitial: "",
        lastName: "",
        email: "",
        userID: "",
        password: ""
    });

    function setRegistrationField(field: keyof RegistrationData, value: string) {
        setData({...data, [field]: value});
    }

    const [authenticated, setAuthenticated] = useState<boolean>(false);

    async function onRegister() {
        if (!validateRegistrationData(data)){
            return;
        }

        const code = await requestRegister(data);

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
                    <SmallFormInput name={"first name"} content={data.firstName} onChange={(value: string) => setRegistrationField("firstName", value)} style={{marginRight: "1%"}}/>
                    <SmallFormInput name={"middle initial"} content={data.midInitial} onChange={(value: string) => setRegistrationField("midInitial", value)} style={{marginLeft: "1%"}}/>
                </View>

                <FormInput name={"last name"} content={data.lastName} onChange={(value: string) => setRegistrationField("lastName", value)}/>

                <FormInput name={"email"} content={data.email} onChange={(value: string) => setRegistrationField("email", value)}/>

                <FormInput name={"password"} content={data.password} onChange={(value: string) => setRegistrationField("password", value)} secured/>
        
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
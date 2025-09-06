import { Dimensions, StyleSheet, TextInput } from 'react-native';
import { Image, ImageBackground } from 'expo-image';
import { Link } from 'expo-router';
import { useState } from 'react';

import RootView from '@/components/RootView';
import { Text, View } from '@/components/Themed';
import { Container, TextField, LinkedContainer, Button } from '@/components/Containers';

const backgroundImage = require('@/assets/images/background.jpg');
const titleText = require('@/assets/images/iskolar-text.svg');
const ribbon = require('@/assets/images/ribbon.svg');

export default function LoginScreen() {
	const [email, onChangeEmail] = useState<string>('');
	const [password, onChangePassword] = useState<string>('');

	return (
		<RootView>
			<ImageBackground
				source={backgroundImage}
				style={styles.container}
				imageStyle={{ opacity: 0.7 }}
			>
				<Image source={ribbon} style={styles.ribbon} />
				<Image source={titleText} style={styles.titleImage}	/>

				<View style={styles.form}>
					<TextField
						label='email'
						style={{ flexGrow: 0.20 }}
						options={{
							inputMode: 'email',
							onChangeText: onChangeEmail,
							value: email,
						}}
					/>

					<TextField
						label='password'
						style={{ flexGrow: 0.20 }}
						options={{
							secureTextEntry: true,
							onChangeText: onChangePassword,
							value: password
						}}
					/>

					<Button
						label='LOG IN'
						href='/home'
						style={{ flexGrow: 0.22 }}
					/>
				</View>
				
				<Text style={styles.signUpText}>
					don’t have an account? 
					<Link href='/+not-found' style={{ fontWeight: 'bold' }}> sign up</Link>
				</Text>
			</ImageBackground>
		</RootView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 20,
		paddingBottom: 100,
		justifyContent: 'space-evenly',
	},
	ribbon: {
		position: 'absolute',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height * 1.35,
		top: -200,
		opacity: 0.4
	},
	titleImage: {
		flexGrow: 5,
		position: 'relative',
		width: 1900,
		height: 150,
		left: '-225%',
		top: -50,
	},
	form: {
		backgroundColor: 'transparent',
		height: '50%',
		marginTop: -125,
		paddingVertical: 10,
		gap: 10,
	},
	textField: {
		flexGrow: 0.20,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
	},
	button: {
		flexGrow: 0.22,
		textAlign: 'center',
		backgroundColor: '#1b1729',
	},
	signUpText: {
		textAlign: 'center',
		marginTop: 25,
		fontSize: 12,
		fontWeight: 'normal',
	},
})
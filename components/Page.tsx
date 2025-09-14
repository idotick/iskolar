import { StyleSheet, View, ScrollView, ViewProps, ImageBackground } from "react-native";


const background_image = require('@/assets/images/background.jpg');

export function ScrollablePage({ children, style }: ViewProps) {
	return (
		<ScrollView style={[styles.screen_container, style]}>
			<View style={[styles.container]}> 
			{ children } 
			</View>
		</ScrollView>
		
	);
}

export function Page({ children, style }: ViewProps) {
	return (
		<View style={[styles.screen_container, style]}>

			<View style={[styles.container]}> 
			{ children } 
			</View>
		</View>
		
	);
}


const styles = StyleSheet.create({
	screen_container: {
		flex: 1,

		width: "100%",
		height: "100%",

		backgroundColor: '#393b42ff',

	},

	background: {
        position: "absolute",

        width: '100%',
		height: '100%',

		justifyContent: 'space-evenly',
    },

	container: {
		flex: 1,
		
		margin: 20,
	},
})
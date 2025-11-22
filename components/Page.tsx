import { StyleSheet, View, ScrollView, ViewProps } from "react-native";

export function ScrollablePage({ children, style }: ViewProps) {
	return (
		<ScrollView style={[styles.screenContainer, style]}>
			<View style={[styles.container]}> 
			{ children } 
			</View>
		</ScrollView>
		
	);
}

export function Page({ children, style }: ViewProps) {
	return (
		<ScrollView style={[styles.screenContainer, style]}>
			<View style={[styles.container]}> 
			{ children } 
			</View>
		</ScrollView>
		
	);
}


const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,

		width: "100%",
		height: "100%",

		backgroundColor: '#353535ff',

	},

	background: {
        position: "absolute",

        width: '100%',
		height: '100%',

		justifyContent: 'space-evenly',
    },

	container: {
		flex: 1,

		padding: 8
	},
})
import { StyleSheet, View, ScrollView } from "react-native";


export default function Page({ children }: { children?: any}) {
	return (
		<ScrollView style={[styles.scroll_container]}>
			<View style={[styles.container]}> 
			{ children } 
		</View>
		</ScrollView>
		
	);
}

const styles = StyleSheet.create({
	scroll_container: {
		flex: 1,
	},

	container: {
		flex: 1,
		
		padding: 20,

		backgroundColor: '#151932',
	},
})
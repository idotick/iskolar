import { StyleSheet, View } from "react-native";

export default function Page({ children }: { children: any}) {
	return (
		<View style={[styles.container]}> { children } </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#151932',
	},
})
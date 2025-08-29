import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";



export default function RootView({spaced, children}: {spaced?: boolean, children: any}) {
	let paddingVal;

	if (spaced)
		paddingVal = 20

	return (
		<View style={[styles.root, { padding: paddingVal}]}>{children}</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#151932',
	},
})
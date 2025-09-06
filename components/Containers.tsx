import { Pressable, StyleSheet, ViewProps } from "react-native";
import { Link, LinkProps } from "expo-router";

import { View } from "./Themed";

export function Container(props: ViewProps) {
	return (
		<View {...props} style={[styles.basic, props.style]}>{props.children}</View>
	);
}

export function RowContainer(props: ViewProps) {
	return (
		<View {...props} style={[styles.row, props.style]}>{props.children}</View>
	);
}

export function LinkedContainer(props: LinkProps) {
	return (
		<Link {...props} href={props.href} style={[styles.linked, props.style]}>
			<Pressable>{props.children}</Pressable>
		</Link>
	);
}


const styles = StyleSheet.create({
	basic: {
		flex: 1,
		backgroundColor: '#ffa34a',
		borderRadius: 17,
		padding: 15,
		marginBottom: 15,
	},
	row: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 15,
	},
	linked: {
		flex: 1,
		backgroundColor: '#ffd9b4',
		borderRadius: 17,
		padding: 25,
		marginTop: 20,
	},
});
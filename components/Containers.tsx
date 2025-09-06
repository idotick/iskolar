import { Text, View, TextInput, Pressable, StyleSheet, ViewProps, TextInputProps, StyleProp, ViewStyle, TextStyle } from "react-native";

import { Href, Link, LinkProps } from "expo-router";

export function Container(props: ViewProps) {
	return (
		<View {...props} style={[styles.basic, props.style]}> { props.children } </View>
	);
}

export function RowContainer(props: ViewProps) {
	return (
		<View {...props} style={[styles.row, props.style]}> { props.children } </View>
	);
}

export function LinkedContainer(props: LinkProps) {
	return (
		<Link {...props} href={props.href} style={ [ styles.linked, props.style ] }>
			<Pressable>{props.children}</Pressable>
		</Link>
	);
}

type TextFieldProps = {
	label: string,
	style?: StyleProp<ViewStyle>,
	options: TextInputProps,
}

export function TextField({label, style, options}: TextFieldProps) {
	return (
		<Container style={[styles.input, style]}>
			<Text style={{ fontSize: 8.5 }}>{label}</Text>
			<TextInput {...options} style={{ fontSize: 12 }}/>
		</Container>
	);
}

type ButtonProps = {
	label: string,
	href: Href,
	style?: StyleProp<TextStyle>,
}

export function Button({label, href, style}: ButtonProps) {
	return (
		<LinkedContainer href={href} style={[styles.button, style]}>
			<Text style={{ fontSize: 30 }}>{label}</Text>
		</LinkedContainer>
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
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		color: '#fff6f2',
	},
	button: {
		textAlign: 'center',
		backgroundColor: '#1b1729',
		color: '#fff6f2',
	}
});
import { Text, View, TextInput, Pressable, StyleSheet, ViewProps, TextInputProps, StyleProp, ViewStyle, TextStyle } from "react-native";

import { Href, Link, LinkProps } from "expo-router";



type TextFieldProps = {
	label: string,
	style?: StyleProp<ViewStyle>,
	options: TextInputProps,
}


type ButtonProps = {
	label: string,
	href: Href,
	style?: StyleProp<TextStyle>,
}




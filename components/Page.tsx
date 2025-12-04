import { DrawerActions } from "@react-navigation/native";
import { Router, useNavigation, useRouter } from "expo-router";
import { StyleSheet, View, ScrollView, ViewProps } from "react-native";
import { Appbar } from "react-native-paper";

export function ScrollablePage({ children, style }: ViewProps) {
	return (
		<ScrollView style={[styles.screenContainer, style]}>
			<View style={[styles.container]}> 
			{ children } 
			</View>
		</ScrollView>
		
	);
}

type PageProps = {
	title: string
} & ViewProps;

export function Page({ children, title, style }: PageProps) {
	const router: Router = useRouter();
	const nav = useNavigation();

	return (
		<View style={[styles.screenContainer, style]}>
			<Appbar.Header>
				<Appbar.Action icon="menu" onPress={() => nav.dispatch(DrawerActions.openDrawer())} />
				<Appbar.Content title={title} titleStyle={{fontWeight: "bold"}}/>
			</Appbar.Header>
			<View style={[styles.container]}> 
			{ children } 
			</View>
		</View>
		
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
	},
})
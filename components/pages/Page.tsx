import { StyleSheet, View, ScrollView, ViewProps, ViewStyle } from "react-native";

import { Appbar } from "react-native-paper";

import { DrawerActions } from "@react-navigation/native";

import { Router, useNavigation, useRouter } from "expo-router";

import { useTheme  } from "@/constants/Theme";

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
	title: string,
	scrollable?: boolean,
	contentStyle?: ViewStyle
} & ViewProps;

export function Page({ children, title, style, scrollable, contentStyle }: PageProps) {
	const router: Router = useRouter();

	const nav = useNavigation();

	const theme = useTheme();

	const themeStyle: ViewStyle = {
		backgroundColor: theme.colors.primary
	};

	function openDrawer(){
		nav.dispatch(DrawerActions.openDrawer());
	}

	if (scrollable){
		return (
			<ScrollView style={[styles.screenContainer, style, themeStyle]}>
				<Appbar.Header>
					<Appbar.BackAction onPress={() => router.back()}/>
					<Appbar.Content title={title} titleStyle={{fontWeight: "bold"}}/>
				</Appbar.Header>

				<View style={[styles.container, contentStyle]}> 
					{ children } 
				</View>
			</ScrollView>
		);
	}

	return (
		<View style={[styles.screenContainer, style, themeStyle]}>
			<Appbar.Header>
				<Appbar.Action icon="menu" onPress={openDrawer} />
				<Appbar.Content title={title} titleStyle={{fontWeight: "bold"}}/>
				<Appbar.Action icon="cog" onPress={() => router.push("/settings")} />
				<Appbar.Action icon="bell" onPress={() => router.push("/notifications")} />
			</Appbar.Header>

			<View style={[styles.container, contentStyle]}> 
				{ children } 
			</View>
		</View>
	);
}

export function ModalPage({ children, title, style, scrollable, contentStyle }: PageProps) {
	const router: Router = useRouter();

	const nav = useNavigation();

	const theme = useTheme();

	const themeStyle: ViewStyle = {
		backgroundColor: theme.colors.primary
	};

	if (scrollable){
		return (
			<ScrollView style={[styles.screenContainer, style, themeStyle]}>
				<Appbar.Header>
					<Appbar.BackAction onPress={() => router.back()}/>
					<Appbar.Content title={title} titleStyle={{fontWeight: "bold"}}/>
				</Appbar.Header>

				<View style={[styles.container, contentStyle]}> 
					{ children } 
				</View>
			</ScrollView>
		);
	}

	return (
		<View style={[styles.screenContainer, style, themeStyle]}>
			<Appbar.Header>
				<Appbar.BackAction onPress={() => router.back()}/>
				<Appbar.Content title={title} titleStyle={{fontWeight: "bold"}}/>
			</Appbar.Header>

			<View style={[styles.container, contentStyle]}> 
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
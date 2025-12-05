import { StyleSheet, View, ScrollView, ViewProps, ViewStyle } from "react-native";

import { Appbar } from "react-native-paper";

import { DrawerActions } from "@react-navigation/native";

import { Router, useNavigation, useRouter } from "expo-router";

import { useTheme  } from "@/constants/Theme";

type PageProps = {
	title: string,
	scrollable?: boolean,
	modal?: boolean,
	contentStyle?: ViewStyle

} & ViewProps;

export default function Page({ children, title, style, contentStyle, scrollable, modal }: PageProps) {
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
		return (<ScrollView contentContainerStyle={styles.contentContainer} style={[styles.screenContainer, style, themeStyle]}>
			<Appbar.Header style={styles.header}>
				{
					(modal) ? (<Appbar.BackAction onPress={() => router.back()}/>) : (<Appbar.Action icon="menu" onPress={openDrawer} />)
				}

				<Appbar.Content title={title} titleStyle={{fontWeight: "bold"}}/>

				{
					!modal && (
					<>
					<Appbar.Action icon="cog" onPress={() => router.push("/settings")} />
					<Appbar.Action icon="bell" onPress={() => router.push("/notifications")} />
					</>
				)}

			</Appbar.Header>

			<View style={[styles.container, contentStyle]}> 
				{ children } 
			</View>
		</ScrollView>);
	}

	return (<View style={[styles.screenContainer, style, themeStyle]}>
		<Appbar.Header style={styles.header}>
			{
				(modal) ? (<Appbar.BackAction onPress={() => router.back()}/>) : (<Appbar.Action icon="menu" onPress={openDrawer} />)
			}

			<Appbar.Content title={title} titleStyle={{fontWeight: "bold"}}/>

			{
				!modal && (
				<>
				<Appbar.Action icon="cog" onPress={() => router.push("/settings")} />
				<Appbar.Action icon="bell" onPress={() => router.push("/notifications")} />
				</>
			)}

		</Appbar.Header>

		<View style={[styles.container, contentStyle]}> 
			{ children } 
		</View>
	</View>);
}


const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,

		width: "100%",
		height: "100%",

		backgroundColor: '#353535ff',
		
	},

	header: {
		position: "absolute",

		top: 16,

		width: "100%",

		zIndex: 100
	},

	background: {
        position: "absolute",

        width: '100%',
		height: '100%',

		justifyContent: 'space-evenly',
    },

	container: {
		flex: 1,

		width: "100%",
		height: "100%",

		paddingTop: 64,

	},

	contentContainer: {
		flex: 1,

		width: "100%",
		height: "100%",
	}
})
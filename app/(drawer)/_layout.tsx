import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Appbar, PaperProvider, useTheme } from 'react-native-paper';

import { Link, Router, Stack, Tabs, useRouter} from 'expo-router';
import { Drawer } from 'expo-router/drawer'

import FontAwesome from '@expo/vector-icons/FontAwesome';

import AuthProvider from '@/contexts/AuthContext';
import PaperDrawer from '@/components/drawer/PaperDrawer';



function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return (
		<View style={{}}>
			<FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
		</View>	
		);
}

export default function DrawerLayout() {
	

	const router: Router = useRouter();

	const [ active, setActive ] = useState<string>("home");

	function returnToPrevious(){
		router.back();
	}

	return (
		<PaperProvider>
			<AuthProvider>
				<Drawer
					screenOptions={{
						headerShown: false
					}}
				 drawerContent={props => <PaperDrawer {...props} />}
				
				/>
			</AuthProvider>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

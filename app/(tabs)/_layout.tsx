import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from "@expo/vector-icons/Entypo";
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Text, View } from '@/components/Themed';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: useClientOnlyValue(false, true),
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: '',
					tabBarStyle: { backgroundColor: '#ffa34a' },
					headerStyle: { backgroundColor: '#151932' },
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
					headerLeft: () => (
						<View style={{ backgroundColor: 'transparent', marginLeft: 25 }}>
							<Text style={{ fontSize: 28.6 }}>iskolar</Text>
							<Text style={{ fontSize: 7.1 }}>by UNLAD</Text>
						</View>
					),
					headerRight: () => (
						<View style={{ marginRight: 25, backgroundColor: 'transparent', flexDirection: "row", gap: 10 }}>
							<Link href="/modal" asChild>
								<Pressable onPress={() => console.log("notifs")}>
									<Entypo name='bell' size={24} color='#fff' />
								</Pressable>
							</Link>

							<Link href="/modal" asChild>
								<Pressable onPress={() => console.log("settings")}>
									<Entypo name='cog' size={24} color='#fff' />
								</Pressable>
							</Link>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</Tabs>
	);
}

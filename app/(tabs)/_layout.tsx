import React from 'react';
import { Pressable, Text, View } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from "@expo/vector-icons/Entypo";
import { Link, Tabs } from 'expo-router';

import AuthProvider from '@/contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	return (
		<AuthProvider>
			<Tabs
				screenOptions={{
					tabBarStyle: { backgroundColor: '#161618ff', height: 96, },
					tabBarActiveTintColor: "#ffffff",
					headerStyle: { backgroundColor: '#161618ff' },
					tabBarIconStyle: {
						height: 64,
						width: 64,

						position: 'absolute',

						top: -16,

						aspectRatio: 1,

						borderRadius: 32,

						backgroundColor: '#161618ff'
					},

					headerLeft: () => (
							<View style={{ backgroundColor: 'transparent', marginLeft: 25 }}>
								<Text style={{ fontSize: 28.6, fontWeight: "bold", color: "white" }}>iskolar</Text>
							</View>
					),
					
					headerRight: () => (
							<View style={{ marginRight: 25, backgroundColor: 'transparent', flexDirection: "row", gap: 10 }}>
								<Link href="/notifications" asChild>
									<Pressable onPress={() => console.log("notifs")}>
										<Entypo name='bell' size={24} color='#fff' />
									</Pressable>
								</Link>

								<Link href="/settings" asChild>
									<Pressable onPress={() => console.log("settings")}>
										<Entypo name='cog' size={24} color='#fff' />
									</Pressable>
								</Link>
							</View>
					),
				}}>
				<Tabs.Screen
					name="index"
					options={{
						title: '',
						tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
						
					
					}}
				/>
				<Tabs.Screen
					name="announcements"
					options={{
						title: '',
						tabBarIcon: ({ color }) => <TabBarIcon name="bullhorn" color={color} />,
					}}
				/>

				<Tabs.Screen
					name="cafeteria"
					options={{
						title: '',
						tabBarIcon: ({ color }) => <Ionicons name="fast-food" size={28} style={{marginBottom: 3}} color={color}/>,
					}}
				/>
			</Tabs>
		</AuthProvider>
	);
}

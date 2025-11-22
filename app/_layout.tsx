import { useEffect } from 'react';

import { useColorScheme, View, Text, Pressable } from 'react-native';

import { DarkTheme, DefaultTheme} from '@react-navigation/native';

import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <Stack screenOptions={
      {
        headerStyle: { backgroundColor: '#161618ff' },
        headerLeft: () => (
            <View style={{ backgroundColor: 'transparent', marginLeft: 25 }}>
              <Text style={{ fontSize: 28.6, fontWeight: "bold", color: "white" }}>iskolar</Text>
            </View>
        ),
        
        headerRight: () => (
            <View style={{ marginRight: 4, backgroundColor: 'transparent', flexDirection: "row", gap: 10 }}>
              <Link href="/notifications" asChild>
                <Entypo name='bell' size={24} color='#fff' />
              </Link>

              <Link href="/settings" asChild>
                <Entypo name='cog' size={24} color='#fff' />
              </Link>
            </View>
        ),
        headerBackVisible: false
      }
    }>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(settings)" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ presentation: 'modal', title: ''}} />
      <Stack.Screen name="notifications" options={{ presentation: 'modal',  title: '' }} />
    </Stack>
  );
}

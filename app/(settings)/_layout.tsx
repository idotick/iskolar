import { useEffect } from 'react';

import { useColorScheme, View, Text, Pressable } from 'react-native';

import { DarkTheme, DefaultTheme} from '@react-navigation/native';

import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';

export default function SettingsLayout() {

  return (
    <Stack screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="profile" options={{ presentation: 'modal',  title: '' }} />
      <Stack.Screen name="preferences" options={{ presentation: 'modal',  title: '' }} />
    </Stack>
  );
}

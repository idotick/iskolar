import { Text, View, Platform, StyleSheet } from 'react-native';


import { StatusBar } from 'expo-status-bar';
import PageContainer from '@/components/containers/PageContainer';
import { Page } from '@/components/Page';
import SettingContainer from '@/components/containers/SettingContainer';
import AuthButton from '@/components/form/AuthButton';
import { request_logout } from '@/handlers/session';
import { useState } from 'react';
import { Redirect } from 'expo-router';

export default function SettingsScreen() {
  const [ authenticated, set_authenticated ] = useState<boolean>(true);

  const on_sign_out = async () => {
    const code: number = await request_logout();

    set_authenticated(false);

    if (code){
      return;
    }
  }

  if (!authenticated){
    return <Redirect href="/signin"/>
  }
  
  return (
    <PageContainer>
      <Page>
        <SettingContainer> 
          <Text> Lo</Text>
        </SettingContainer>

        <AuthButton name="signout" on_press={on_sign_out} style={styles.button} />

      </Page>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    position: "absolute",

    bottom: 96,
  }
});

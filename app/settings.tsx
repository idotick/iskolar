import { Text, View, Platform, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import PageContainer from '@/components/containers/PageContainer';
import { Page } from '@/components/Page';
import SettingContainer from '@/components/containers/SettingContainer';
import AuthButton from '@/components/form/AuthButton';
import { requestLogOut } from '@/handlers/session';
import { useState } from 'react';
import { Redirect } from 'expo-router';

export default function SettingsScreen() {
  const [ authenticated, setAuthenticated ] = useState<boolean>(true);

  const onLogOut = async () => {
    const code: number = await requestLogOut();

    setAuthenticated(false);

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
          <Text> </Text>
        </SettingContainer>

        <AuthButton name="signout" onAction={onLogOut} style={styles.button} />

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

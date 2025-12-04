import { Text, View, Platform, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import PageContainer from '@/components/containers/PageContainer';
import { Page } from '@/components/Page';
import SettingContainer from '@/components/containers/SettingContainer';
import AuthButton from '@/components/form/AuthButton';
import { requestLogout } from '@/handlers/Session';
import { useState } from 'react';
import { Redirect } from 'expo-router';
import SectionLink from '@/components/sections/SectionLink';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [ authenticated, setAuthenticated ] = useState<boolean>(true);

  const onLogout = async () => {
    const code: number = await requestLogout();

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
        <SectionLink href={"/profile"} name={"profile"} description={"Your really cool information"} icon={
            <MaterialIcons name="manage-accounts" size={48}/>
        }/>

        <SectionLink href={"/preferences"} name={"preferences"} description={"Change how the app feels."} icon={
            <MaterialIcons name="format-paint" size={48}/>
        }/>

        <SettingContainer> 
          <Text> </Text>
        </SettingContainer>

        <AuthButton name="signout" onAction={onLogout} style={styles.button} />

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

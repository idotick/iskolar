import { useState } from 'react';

import { StyleSheet } from 'react-native';

import { Redirect } from 'expo-router';

import { Entypo, MaterialIcons } from '@expo/vector-icons';

import { requestLogout } from '@/handlers/Session';

import PageContainer from '@/components/containers/PageContainer';

import AuthButton from '@/components/form/AuthButton';

import SectionLink from '@/components/sections/SectionLink';

import { ModalPage } from '@/components/pages/Page';

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
      <ModalPage title={"Settings"}>
        <SectionLink href={"/profile"} name={"profile"} description={"Your really cool information"} style={{ marginTop: 8 }} icon={
            <MaterialIcons name="manage-accounts" size={36}/>
        }/>

        <SectionLink href={"/preferences"} name={"preferences"} description={"Change how the app feels."} icon={
            <MaterialIcons name="format-paint" size={36}/>
        }/>


        <AuthButton name="signout" onAction={onLogout} style={styles.button} />

      </ModalPage>
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
  },
});

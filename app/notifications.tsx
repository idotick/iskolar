import { Text, View, Platform, StyleSheet } from 'react-native';


import { StatusBar } from 'expo-status-bar';
import PageContainer from '@/components/containers/PageContainer';
import { Page } from '@/components/Page';
import NotificationList, { NotifData } from '@/components/notifications/NotificationList';


export default function ModalScreen() {
  const data: NotifData[] = [
    {
      id: "a1",
      name: "yes",
      content: "yes"
    },

    {
      id: "a2",
      name: "yes",
      content: "yes"
    },

    {
      id: "a3",
      name: "yes",
      content: "yes"
    },

    {
      id: "a1",
      name: "yes",
      content: "yes"
    },

    {
      id: "a2",
      name: "yes",
      content: "yes"
    },

    {
      id: "a3",
      name: "yes",
      content: "yes"
    },

    {
      id: "a1",
      name: "yes",
      content: "yes"
    },

    {
      id: "a2",
      name: "yes",
      content: "yes"
    },

    {
      id: "a3",
      name: "yes",
      content: "yes"
    },

    {
      id: "a1",
      name: "yes",
      content: "yes"
    },

    {
      id: "a2",
      name: "yes",
      content: "yes"
    },

    {
      id: "a3",
      name: "yes",
      content: "yes"
    },

    {
      id: "a1",
      name: "yes",
      content: "yes"
    },

    {
      id: "a2",
      name: "yes",
      content: "yes"
    },

    {
      id: "a3",
      name: "yes",
      content: "yes"
    },

    {
      id: "a1",
      name: "yes",
      content: "yes"
    },

    {
      id: "a2",
      name: "yes",
      content: "yes"
    },

    {
      id: "a3",
      name: "yes",
      content: "yes"
    },
  ];

  return (
    <PageContainer>
      <Page>
        <NotificationList data={data}/>
      </Page>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import { StyleSheet } from 'react-native';

import PageContainer from '@/components/containers/PageContainer';
import NotificationList, { NotifData } from '@/components/notifications/NotificationList';
import { ModalPage } from '@/components/pages/Page';


export default function ModalScreen() {
  const data: NotifData[] = [
    {
      id: "a1",
      name: "yes",
      content: "yes"
    },
  ];

  return (
    <PageContainer>
      <ModalPage title={"Notifications"}>
        <NotificationList data={data} style={styles.list}/>
      </ModalPage>
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

  list: {
    marginTop: 16,
  }
});


import { Text, View, StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import { Page, } from '@/components/Page';

import PageContainer from '@/components/containers/PageContainer';
import AnnouncementsPreview from '@/components/previews/AnnouncementPreview';
import SchedulePreview from '@/components/previews/SchedulePreview';
import ProfilePreview from '@/components/previews/ProfilePreview';


export default function HomeScreen() {
	return (
		<PageContainer>
			<Page>
				<ProfilePreview/>
				<SchedulePreview style={styles.schedule}/>
				<AnnouncementsPreview style={styles.announcements} data={["Welcome to Pisay!", "Gym has re-opened after 2 weeks."]}/>
			</Page>
		</PageContainer>
	);
}

const styles = StyleSheet.create({
	background: {
        position: "absolute",

        width: '100%',
		height: '100%',
    },

	schedule: {
		height: 80,
		marginTop: 24,

		marginVertical: 12,
	},

	announcements: {
		height: 184,
		marginVertical: 16,
	},
});

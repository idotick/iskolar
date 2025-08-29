import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, ViewProps } from 'react-native';
import { useState } from 'react';

import RootView from '@/components/RootView';
import SearchBar from '@/components/SearchBar';
import AnnouncementOverview from '@/components/AnnouncementOverview';
import { Text, View } from '@/components/Themed';
import { RowContainer } from '@/components/Containers';

export default function AnnouncementScreen() {
	return (
		<RootView>
			<RowContainer style={{ backgroundColor: '#ffa34a', padding: 15 }}>
				<Entypo name='megaphone' size={90} color='#fff6f2' style={{ marginLeft: 25 }} />
				<View style={styles.titleContainer}>
					<Text style={{ fontSize: 20, textAlign: 'center' }}>ANNOUNCEMENTS</Text>
					<SearchBar />
				</View>
			</RowContainer>

			<View style={styles.announcementsContainer}>
				<AnnouncementOverview
					recent
					date={new Date()}
					title='SUSPENDED!'
					overview='Due to the rain and typhoon, the classes this week has been...'
				/>

				<AnnouncementOverview
					date={new Date(2025, 0, 1)}
					title='HAPPY NEW YEAR!'
					overview='Happy new year, iskolars! We hope you are enjoying...'
				/>

				<AnnouncementOverview
					date={new Date(2024, 11, 25)}
					title='HO, HO, HO, HO, HO!'
					overview='Merry Christmas, iskolars! It is the gifting season once...'
				/>

				<AnnouncementOverview
					date={new Date(2024, 5, 5)}
					title='NEW SY, NEW ME'
					overview='Welcome back, iskolars! Are you ready for the coming reqs...'
				/>

				<AnnouncementOverview
					date={new Date(2024, 0, 1)}
					title='HAPPY NEW YEAR!'
					overview='Happy new year, iskolars! We hope you are enjoying...'
				/>
			</View>
		</RootView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		marginRight: 25,
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	announcementsContainer: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'space-evenly',
		padding: 20,
	}
});

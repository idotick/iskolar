import { StyleSheet, Text, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';

import SearchBar from '@/components/SearchBar';
import AnnnouncementList from '@/components/announcements/AnnouncementList';
import RowContainer from '@/components/containers/RowContainer';
import { Page } from '@/components/Page';

export default function AnnouncementScreen() {
	return (
		<Page title={"Announcements"}>
			<RowContainer style={styles.header}>
				<Entypo name={'megaphone'} size={85} color={'white'} style={{ marginRight: 30 }} />
				<View style={styles.titleContainer}>
					<Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>ANNOUNCEMENTS</Text>
				</View>
			</RowContainer>

			<SearchBar placeholder='Search school announcements' />

			<AnnnouncementList
				data={[
					{
						recent: true,
						date: new Date(),
						title: 'SUSPENDED!',
						overview: 'Due to the rain and typhoon, the classes this week has been...',
					},
					{
						date: new Date(2025, 0, 1),
						title: 'HAPPY NEW YEAR!',
						overview: 'Happy new year, iskolars! We hope you are enjoying...',
					},
					{
						date: new Date(2024, 11, 25),
						title: 'HO, HO, HO, HO, HO!',
						overview: 'Merry Christmas, iskolars! \'Tis the gifting season once...',
					},
					{
						date: new Date(2024, 5, 5),
						title: 'NEW SY, NEW ME',
						overview: 'Welcome back, iskolars! Are you ready for the coming reqs...',
					},
					{
						date: new Date(2024, 0, 1),
						title: 'HAPPY NEW YEAR!',
						overview: 'Happy new year, iskolars! We hope you are enjoying...',
					},
				]}
			/>
		</Page>
	);
}

const styles = StyleSheet.create({
	header: {
		alignContent: 'center',
		justifyContent: 'center',

		margin: -20,
		marginBottom: 5,
		padding: 15,
		
		borderBottomWidth: 1,
		borderBottomColor: 'white',

		backgroundColor: 'transparent',
	},
	titleContainer: {
		justifyContent: 'center',

		marginRight: 25,

		backgroundColor: 'transparent',
	},
});

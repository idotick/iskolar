import { StyleSheet, Text, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';

import AnnnouncementList from '@/components/announcements/AnnouncementList';
import RowContainer from '@/components/containers/RowContainer';
import Page from '@/components/pages/Page';
import { Card, Modal, Portal, Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { useTheme } from '@/constants/Theme';
import { AnnouncementData } from '@/util/Types';
import AnnouncementModal from '@/components/announcements/AnnouncementModal';

export default function AnnouncementScreen() {
	const theme = useTheme();

	const [announcements, setAnnouncements] = useState<AnnouncementData[]>([
		{
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
	]);

	const [query, setQuery] = useState<string>("");

	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [viewed, setViewed] = useState<AnnouncementData | null>(null);

	const themedStyle = {
		backgroundColor: theme.colors.secondary
	};

	const filtered = announcements.filter((announcement: AnnouncementData) => (announcement.title.toLowerCase().trim().slice(0, query.trim().length) == query.trim().toLowerCase()))

	function exitModal(){
		setModalVisible(false);
	}

	function enterModal(data: AnnouncementData){
		setViewed(data);
		setModalVisible(true);
	}

	return (
		<Page title={"Announcements"}>
			<AnnouncementModal data={viewed} visible={modalVisible} onDismiss={exitModal}/>

			<View style={styles.search}>
				<Searchbar placeholder={"Search for an announcement"} placeholderTextColor={theme.colors.tertiary} style={themedStyle} value={query} onChangeText={setQuery} iconColor={"black"}/>
			</View>
		
			<AnnnouncementList style={styles.list} data={filtered} onInteract={enterModal}/>
		</Page>
	);
}

const styles = StyleSheet.create({
	list: {
		alignSelf: "center",
		
		width: "86%",

		marginTop: 24
	},

	search: {
		alignSelf: "center", 

		width: "86%", 

		marginTop: 24 
	},

	modal: {
		alignSelf: "center",

		width: "75%",
		height: "75%",

		borderRadius: 24,
	},

	modalCard: {
		flex: 1,
	},

	modalTitle: {
		marginTop: 16,

		fontWeight: "bold",
		fontSize: 20,
	},

	modalContent: {

	}
});

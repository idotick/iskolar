import { useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { Card, Modal, Portal, Searchbar } from 'react-native-paper';

import Page from '@/components/pages/Page';

import { useTheme } from '@/constants/Theme';

import { AnnouncementData, requestAnnouncements } from '@/handlers/Announcements';
import AnnouncementList from '@/components/announcements/AnnouncementList';
import { Router, useRouter } from 'expo-router';

export default function AnnouncementScreen() {
	const theme = useTheme();
	const router: Router = useRouter();
	
	const [announcements, setAnnouncements] = useState<AnnouncementData[]>([]);

	const [query, setQuery] = useState<string>("");

	const themedStyle = {
		backgroundColor: theme.colors.secondary
	};

	const filtered = announcements.filter((announcement: AnnouncementData) => (announcement.title.toLowerCase().trim().slice(0, query.trim().length) == query.trim().toLowerCase()))

	async function setupAnnouncements(){
		const requested: AnnouncementData[] = await requestAnnouncements();

		requested.sort((a: AnnouncementData, b: AnnouncementData) => (b.modified.getTime() - a.modified.getTime()))

		setAnnouncements(requested);
	}

	function openAnnouncement(data: AnnouncementData){
		router.push(`/announcements/${data.uuid}`)
	}

	useEffect(() => {
		setupAnnouncements();
	}, [query]);

	return (
		<Page title={"Announcements"} onRefreshed={setupAnnouncements}>
			<View style={styles.search}>
				<Searchbar placeholder={"Search for an announcement"} placeholderTextColor={theme.colors.tertiary} style={themedStyle} value={query} onChangeText={setQuery} iconColor={"black"}/>
			</View>
		
			<AnnouncementList style={styles.list} data={filtered} onInteract={openAnnouncement} onRefreshed={setupAnnouncements}/>
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
});

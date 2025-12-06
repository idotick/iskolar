import { Text, View, StyleSheet, ViewProps, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

import RowContainer from '@/components/containers/RowContainer';

import { useTheme } from '@/constants/Theme';
import { AnnouncementContent, AnnouncementData, requestAnnouncement } from '@/handlers/Announcements';
import { useEffect, useState } from 'react';

type AnnouncementViewProps = {
	data: AnnouncementData,
	onInteract: (data: AnnouncementData) => void
} & ViewProps;

export default function AnnouncementView({ data, onInteract }: AnnouncementViewProps) {
	const theme = useTheme();

	const themedStyle = {
		backgroundColor: "white"
	};

	function onPress(){
		onInteract(data);
	}

	const { uuid, created, title, author } = data;

	return (
		<Card style={[styles.container, themedStyle]}>
			<Pressable style={styles.link} onPress={onPress}>
				<Card.Content>
					<Text style={styles.date}> {created.toLocaleDateString("en-us")} </Text>
				</Card.Content>
				<Card.Title titleStyle={styles.title} title={title} subtitleStyle={styles.subtitle} subtitle={"Posted by " + author} />
			</Pressable>
			
		</Card>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},

	title: {
		fontWeight: "bold",

		marginBottom: -8,
	},

	subtitle: {
		color: "gray",
		fontSize: 12
	},

	date: {
		position: "absolute",

		right: 12,
		top: 8,
		
		color: "#58498fff",
		fontSize: 12
	},

	link: {
		flex: 1,
		width: "100%",
		height: "100%",
	}
});
import { Text, View, StyleSheet, ViewProps, Pressable } from 'react-native';

import RowContainer from '@/components/containers/RowContainer';
import { Card } from 'react-native-paper';
import { useTheme } from '@/constants/Theme';
import { AnnouncementData } from '@/util/Types';

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

	const { date, title } = data;

	return (
		<Card style={[styles.container, themedStyle]}>
			<Pressable style={styles.link} onPress={onPress}>
				<Card.Title titleStyle={styles.title} title={title} subtitleStyle={styles.subtitle} subtitle={date.toLocaleDateString("en-us")} />
				<Card.Cover source={{ uri: 'https://hypixel.net/attachments/sweet-wonderland-png.3281057/' }} />
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

	link: {
		flex: 1,
		width: "100%",
		height: "100%",
	}
});
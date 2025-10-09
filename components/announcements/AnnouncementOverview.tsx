import { Text, View, StyleSheet } from 'react-native';

import RowContainer from '@/components/containers/RowContainer';

export type AnnouncementData = {
	recent?: boolean
	date: Date
	title: string
	overview: string
}

export default function AnnouncementOverview({ recent, date, title, overview }: AnnouncementData) {
	const fontSize = recent ? 20 : 16;
	const width = recent ? 80 : 65;

	const currentDate = new Date().toDateString();
	const dateString = date.toDateString();
	const display = dateString.split(' ');

	if (dateString === currentDate) {
		display[1] = "Today";
		display[2] = '';
		display[3] = date.toString().substring(16, 21);
	}

	return (
		<RowContainer style={styles.main}>
			<View style={[styles.timeContainer, { width: width }]}>
				<Text style={[styles.text, { fontSize: fontSize }]}>{display[1]} {display[2]}</Text>
				<Text style={[styles.text, { fontSize: 12 }]}>{display[3]}</Text>
			</View>
			<View style={styles.container}>
				<Text style={[styles.text, { fontSize: 16, marginBottom: 5 }]}>{title}</Text>
				<Text style={[styles.text, { fontSize: 9 }]}>{overview}</Text>
			</View>
		</RowContainer>
	);
}

const styles = StyleSheet.create({
	main: {
		justifyContent: 'flex-start',

		marginTop: 20,
		marginBottom: 15,

		backgroundColor: 'tranparent',
	},
	timeContainer: {
		justifyContent: 'center',
		
		height: 70,

		marginRight: 20,

		borderRightWidth: 2,
		borderRightColor: '#fff6f2',

		backgroundColor: 'transparent',
	},
	container: {
		justifyContent: 'center',

		width: 200,

		backgroundColor: 'transparent',
	},
	text: {
		backgroundColor: 'transparent',

		textAlign: 'left',

		color: '#fff6f2',
	}
})
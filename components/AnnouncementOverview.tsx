import { Text, View, StyleSheet } from 'react-native';

import RowContainer from './containers/RowContainer';

type Props = {
	recent?: boolean,
	date: Date,
	title: string,
	overview: string,
}

export default function AnnouncementOverview({ recent, date, title, overview }: Props) {
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
		backgroundColor: 'tranparent',
		justifyContent: 'flex-start',
	},
	timeContainer: {
		backgroundColor: 'transparent',
		justifyContent: 'center',
		borderRightColor: '#fff6f2',
		borderRightWidth: 2,
		height: 70,
	},
	container: {
		backgroundColor: 'transparent',
		justifyContent: 'center',
		width: 200,
	},
	text: {
		backgroundColor: 'transparent',
		textAlign: 'left',
		color: '#fff6f2',
	}
})
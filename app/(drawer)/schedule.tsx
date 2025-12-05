
import { Text, View, StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import Page from '@/components/pages/Page';
import PagedContainer from '@/components/containers/PagedContainer';
import { Table } from '@/components/table/Table';
import { ClassData, TeacherData } from '@/components/table/types';
import Container from '@/components/containers/Container';
import SearchBar from '@/components/SearchBar';

export default function HomeScreen() {
	const teacher_infos: TeacherData[][] = [
		[
			{
				name: 'Ma’am Michelle T. Manglicmot',
				email: 'mmanglicmot@cbzrc.pshs.edu.ph',
				consultation: 'Monday - Friday\n13:00 - 18:00',
				room: 'ASTB Faculty'
			},
			{
				name: 'Ma’am Avril Ley Ann Llave',
				email: 'arllave@cbzrc.pshs.edu.ph',
				consultation: 'Monday - Friday\n13:00 - 18:00',
				room: 'ASTB Faculty'
			},
			{
				name: 'Ma’am Kimberly Faye M. Viana',
				email: 'kmviana@cbzrc.pshs.edu.ph',
				consultation: 'Monday - Friday\n13:00 - 18:00',
				room: 'ACAD1 106'
			},
			{
				name: 'Ma’am Princes D. Bulaclac',
				email: 'pdbulaclac@cbzrc.pshs.edu.ph',
				consultation: 'Monday - Friday\n13:00 - 18:00',
				room: 'ACAD2 301'
			},
		]
	]


	const schedule_data: ClassData[][] = [
		[
			{
				time_range: '07:00 - 07:20',
				period: 'Flag Ceremony',
			},
			{
				time_range: '07:20 - 08:10',
				period: 'Homeroom'
			},
			{
				time_range: '08:10 - 09:00',
				period: 'English 5'
			},
			{
				time_range: '09:00 - 09:50',
				period: 'Filipino 5'
			},
			{
				time_range: '09:50 - 10:10',
				period: 'Break'
			},
			{
				time_range: '10:10 - 11:00',
				period: 'Mathematics 5'
			},
			{
				time_range: '11:00 - 11:50',
				period: 'Lunch Break'
			},
			{
				time_range: '11:50 - 12:40',
				period: 'Computer Science 5'
			},
			{
				time_range: '14:20 - 18:00',
				period: 'Physics 3'
			},
		],
		[
			{
				time_range: '07:20 - 08:10',
				period: 'Filipino 5'
			},
			{
				time_range: '08:10 - 09:00',
				period: 'English 5'
			},
			{
				time_range: '09:00 - 09:50',
				period: 'Research 2'
			},
			{
				time_range: '09:50 - 10:10',
				period: 'Break'
			},
			{
				time_range: '10:10 - 11:00',
				period: 'SCALE'
			},
			{
				time_range: '11:00 - 11:50',
				period: 'Lunch Break'
			},
			{
				time_range: '11:50 - 13:30',
				period: 'Physics 3'
			},
			{
				time_range: '14:20 - 18:00',
				period: 'Computer Science 5'
			},
		],
		[
			{
				time_range: '07:00 - 07:20',
				period: 'Social Science 5'
			},
			{
				time_range: '09:50 - 10:10',
				period: 'Break'
			},
			{
				time_range: '11:00 - 11:50',
				period: 'Lunch Break'
			},
		],
		[
			{
				time_range: '07:20 - 08:10',
				period: 'Filipino 5'
			},
			{
				time_range: '08:10 - 09:00',
				period: 'Social Science 5'
			},
			{
				time_range: '09:00 - 09:50',
				period: 'Research 2'
			},
			{
				time_range: '09:50 - 10:10',
				period: 'Break'
			},
			{
				time_range: '10:10 - 11:00',
				period: 'Mathematics 5'
			},
			{
				time_range: '11:00 - 11:50',
				period: 'Lunch Break'
			},
			{
				time_range: '13:30 - 14:20',
				period: 'Physics 3'
			},
			{
				time_range: '13:20 - 18:00',
				period: 'Computer Science 5'
			},
		],
		[
			{
				time_range: '07:20 - 08:10',
				period: 'Social Science 5'
			},
			{
				time_range: '08:10 - 09:00',
				period: 'English 5'
			},
			{
				time_range: '09:00 - 09:50',
				period: 'Research 2'
			},
			{
				time_range: '09:50 - 10:10',
				period: 'Break'
			},
			{
				time_range: '10:10 - 11:00',
				period: 'Mathematics 5'
			},
			{
				time_range: '11:00 - 11:50',
				period: 'Lunch Break'
			},
			{
				time_range: '12:40 - 13:30',
				period: 'Homeroom / Flag Retreat'
			},
		],
	];

	let day = new Date().getDay() - 1

	if (day < 0 || day > 4)
		day = 0

	return (
		<Page title={"Schedule "} style={styles.page}>
			<PagedContainer
				style={styles.schedule}
				containerStyle={styles.container}
				buttonStyle={styles.button}
				pages={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
				selected={day}
			>
				{
					schedule_data.map((schedule, index) => {
						return (
							<Table
								data={schedule}
								key={index}
								cellStyle={styles.cell}
							/>
						)
					})
				}
			</PagedContainer>


			<Container style={styles.container}>
				<Text style={styles.title}>Teacher Consultation Hours</Text>
				<SearchBar placeholder='Search teacher consultation hours' />

				{
					teacher_infos.map((teacher, index) => {
						return (
							<Table
								data={teacher}
								key={index}
								cellStyle={[styles.cell, styles.consultCell]}
								style={styles.consultTable}
							/>
						);
					})
				}

			</Container>
		</Page>
	);
}

const styles = StyleSheet.create({
	page: {
        flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		
        position: "absolute",
    },
	container: {
		height: '45%'
	},
	schedule: {
		left: '-10%',

		width: '120%',
		
		padding: '10%',
	},
	button: {
		width: 55,
	},
	consultTable: {
		marginTop: 20
	},
	cell: {
		fontSize: 9,
	},
	consultCell: {
		width: '25%',
	},
	title: {
		marginBottom: 10,

		fontSize: 15,
		fontWeight: 'bold',

		color: 'white',
	}
});

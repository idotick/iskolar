import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

function Container({ flex, children }: { flex?: Array<number>, children: any }) {
	const flexVal = flex === undefined ? [1, 0] : flex;

	flexVal.forEach(value => {
		if (value === undefined) {
			value = 1;
		}
	});

	return (
		<View style={[styles.container, {flexGrow: flexVal[0], flexShrink: flexVal[1]}]}>{children}</View>
	);
}

function RowContainer({children}: any) {
	return (
		<View style={styles.row}>{children}</View>
	);
}

export default function HomeScreen() {
	return (
		<View style={styles.main}>
			<RowContainer>
				<View style={styles.pictureContainer}>
					<Entypo name="user" size={55} color={"#fff"}></Entypo>
				</View>
				<Container>
					<Text style={{ fontSize: 12 }}>John Ivan B. Floirendo</Text>
					<Text style={{ fontSize: 9 }}>Grade 11 - Maimai</Text>
					<Text style={{ fontSize: 9 }}>Rhythm Gaming Block 2</Text>
					<Text style={{ fontSize: 9 }}>WuWa Elective</Text>
				</Container>
			</RowContainer>
			
			<Container flex={[0.4]}>
				<Text style={{ fontSize: 9 }}>CLASS SCHEDULE</Text>
				<Text style={{ fontSize: 14.5 }}>ONGOING CLASS: CHEMISTRY 2</Text>
				<RowContainer>
					<Text style={{ fontSize: 7 }}>NEXT CLASS SOCIAL SCIENCE 5</Text>
					<Text style={{ fontSize: 7 }}>12:30 - 14:20</Text>
				</RowContainer>
			</Container>

			<Container flex={[2, 1]}>
				<Text style={{ fontSize: 14.5 }}>ANNOUNCEMENTS</Text>
				<View style={styles.subContainer}></View>
			</Container>

			<View style={[styles.row, { flex: 2 }]}>
				<Container>
					<RowContainer>
						<Text style={{ fontSize: 14.5 }}>MENU</Text>
						<Text style={{ fontSize: 14.5 }}>DINNER</Text>
					</RowContainer>
					
					<View style={styles.subContainer}></View>
				</Container>

				<Container>
					<Text></Text>
					<Text style={{ fontSize: 11.9, textAlign: 'center' }}>CAFETERIA BALANCE</Text>
				</Container>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#151932',
		padding: 20,
	},
	row: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 15,
	},
	container: {
		flex: 1,
		backgroundColor: '#ffa34a',
		borderRadius: 17,
		padding: 15,
		marginBottom: 15,
	},
	subContainer: {
		flex: 1,
		backgroundColor: '#ffd9b4',
		borderRadius: 17,
		padding: 25,
		marginTop: 20,
	},
	pictureContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 85,
		backgroundColor: '#ffa34a',
		borderRadius: 100,
		padding: 10,
	}
});

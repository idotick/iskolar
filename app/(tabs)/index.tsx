
import { Text, View, Pressable, StyleSheet } from 'react-native';

import Entypo from "@expo/vector-icons/Entypo";

import Page from '@/components/Page';
import { Container, RowContainer, LinkedContainer } from '@/components/Containers'

export default function HomeScreen() {
	return (
		<Page>
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
			
			<Container style={{ flexGrow: 0.4 }}>
				<Text style={{ fontSize: 9 }}>CLASS SCHEDULE</Text>
				<Text style={{ fontSize: 14.5 }}>ONGOING CLASS: CHEMISTRY 2</Text>
				<RowContainer>
					<Text style={{ fontSize: 7 }}>NEXT CLASS SOCIAL SCIENCE 5</Text>
					<Text style={{ fontSize: 7 }}>12:30 - 14:20</Text>
				</RowContainer>
			</Container>

			<Container style={{ flexGrow: 2, flexShrink: 1 }}>
				<Text style={{ fontSize: 14.5 }}>ANNOUNCEMENTS</Text>
				<LinkedContainer href='/announcements' />
			</Container>
			

			<RowContainer style={{ flex: 2 }}>
				<Container>
					<RowContainer>
						<Text style={{ fontSize: 14.5 }}>MENU</Text>
						<Text style={{ fontSize: 14.5 }}>DINNER</Text>
					</RowContainer>
					
					<LinkedContainer href='/+not-found' />
				</Container>

				<Container>
					<Text></Text>
					<Text style={{ fontSize: 11.9, textAlign: 'center' }}>CAFETERIA BALANCE</Text>
				</Container>
			</RowContainer>
		</Page>
	);
}

const styles = StyleSheet.create({
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

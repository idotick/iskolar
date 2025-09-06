import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

import { RowContainer } from './Containers';

export default function SearchBar() {
	const [text, onChangeText] = useState<string>('Search school announcements');

	return (
		<RowContainer style={styles.searchBar}>
			<TextInput style={styles.text} onChangeText={onChangeText} value={text} />
			<Ionicons name='search-sharp' size={10} color='#151932' />
		</RowContainer>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		backgroundColor: '#ffd9b4',
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 17,
		marginTop: 10,
		alignItems:'center'
	},
	text: {
		fontSize: 7,
		color: '#151932',
		fontFamily: 'Poppins',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 125,
	}
})
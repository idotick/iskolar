import { useState } from 'react';

import { TextInput, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import RowContainer from './containers/RowContainer';

export default function SearchBar({ placeholder='' } : { placeholder? : string}) {
	const [text, onChangeText] = useState<string>(placeholder);

	return (
		<RowContainer style={styles.searchBar}>
			<TextInput style={styles.text} onChangeText={onChangeText} value={text} />
			<Ionicons name='search-sharp' size={10} color='white' />
		</RowContainer>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		alignItems: 'center',
		
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 10,

		borderWidth: 1,
		borderRadius: 17,
		borderColor: "white",

		backgroundColor: 'transparent',
	},
	text: {
		width: '95%',

		fontSize: 7,
		
		color: 'white',
	},
})
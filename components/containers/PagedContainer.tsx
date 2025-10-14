import { ReactNode, useState } from "react";
import {
	Pressable,
	Text,
	FlatList, 
	StyleSheet,
	ListRenderItem,
	StyleProp,
	ViewStyle
} from "react-native";

import Container from "./Container"


type PagedContainerProps = {
	pages: Array<string>;
	selected: number;
	style?: StyleProp<ViewStyle>;
	containerStyle?: StyleProp<ViewStyle>;
	buttonStyle?: StyleProp<ViewStyle>;
	children: ReactNode[];
}


export default function PagedContainer( { pages, selected=0, style, containerStyle, buttonStyle, children }: PagedContainerProps ) {
	const [page, set_page] = useState<number>(selected);

	const render_page_buttons: ListRenderItem<string> = ({ item, index }) => (
		<Pressable
			onPress={() => set_page(index)}
			style={[page === index ? styles.clickedButton : styles.button, buttonStyle]}
			key={index}
		>
			<Text style={page === index ? styles.clickedButtonText : styles.buttonText}>{item}</Text>
		</Pressable>
	);

	// TODO: RESOLVE ERROR
	// @ts-expect-error
	const render_pages: ListRenderItem<ReactNode> = ({ item }) => (
		// @ts-expect-error
		((parseInt(item.key) === page) && item) 
	);

	return (
		<Container style={containerStyle}>
			<FlatList
				data={pages}
				horizontal
				style={styles.buttonContainer}
				renderItem={render_page_buttons}
			/>

			<Container style={[styles.contentContainer, style]}>				
				<FlatList
					data={children}
					renderItem={render_pages}
				/>
			</Container>
		</Container>

	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,

		transform: [{ translateY: -20 }],

		padding: 20,
		paddingTop: 40,

		borderWidth: 4,
		borderRadius: 20,
		borderColor: 'white',
	},
	buttonContainer: {
		flexGrow: 0,
		flexShrink: 0,

		zIndex: 1,

		paddingHorizontal: 8,
	},
	clickedButton: {
		marginRight: 10,
		padding: 6,

		borderWidth: 4,
		borderRadius: 10,
		borderColor: 'white',
		
		backgroundColor: '#393b42',
	},
	clickedButtonText: {
		width: '100%',

		textAlign: 'center',

		color: 'white',
	},
	button: {
		padding: 6,
		marginRight: 10,

		borderWidth: 4,
		borderRadius: 10,
		borderColor: 'white',
		
		backgroundColor: 'white',
	},
	buttonText: {
		width: '100%',

		textAlign: 'center',

		color: 'black',
	}
});
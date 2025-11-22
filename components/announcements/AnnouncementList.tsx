import { FlatList, StyleSheet, ViewProps } from 'react-native';

import AnnouncementOverview, { AnnouncementData } from './AnnouncementOverview';

type AnnnouncementListProps = {
	data: AnnouncementData[],
} & ViewProps;

export default function AnnnouncementList( { data, style } : AnnnouncementListProps ) {
	return (
		<FlatList
			data={data}
			contentContainerStyle={styles.container}
			style={[{ flex: 1 }, style]}
			scrollEnabled={false}
			renderItem={({ item }) => (
				<AnnouncementOverview
					recent={item.recent}
					date={item.date}
					title={item.title}
					overview={item.overview}
				/>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,

		backgroundColor: 'transparent',
	},
})
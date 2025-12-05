import { FlatList, StyleSheet, ViewProps } from 'react-native';

import AnnouncementView from './AnnouncementOverview';

import { AnnouncementData } from '@/util/Types';

type AnnouncementListProps = {
	data: AnnouncementData[],
	onInteract: (data: AnnouncementData) => void
} & ViewProps;

export default function AnnouncementList( { data, style, onInteract } : AnnouncementListProps ) {
	return (
		<FlatList
			data={data}
			style={[styles.container, style]}
			scrollEnabled
			renderItem={({ item }) => (
				<AnnouncementView
					data={item}
					onInteract={onInteract}
				/>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
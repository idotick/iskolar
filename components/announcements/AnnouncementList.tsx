import { FlatList, StyleSheet, ViewProps } from 'react-native';

import AnnouncementView from './AnnouncementView'
import { AnnouncementData } from '@/handlers/Announcements';
import { useState } from 'react';

type AnnouncementListProps = {
	data: AnnouncementData[],
	onInteract: (data: AnnouncementData) => void
	onRefreshed: () => void
} & ViewProps;

export default function AnnouncementList( { data, style, onInteract, onRefreshed } : AnnouncementListProps ) {
	const [refreshing, setRefreshing] = useState<boolean>(false);
	
	function onRefresh(){
		setRefreshing(true);
		onRefreshed()
		setTimeout(() => setRefreshing(false), 200);
	}

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
			onRefresh={onRefresh}
			refreshing={refreshing}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

import { Text, View, StyleSheet } from 'react-native';

import { Page } from '@/components/pages/Page';

import PageContainer from '@/components/containers/PageContainer';

export default function HomeScreen() {
	return (
		<PageContainer>

			<Page title={"Cafeteria"}>


			</Page>

		</PageContainer>
	);
}

const styles = StyleSheet.create({
	background: {
        position: "absolute",

        width: '100%',
		height: '100%',
    },
});

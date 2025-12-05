import { Text } from "react-native";

import PageContainer from "@/components/containers/PageContainer";
import Page from '@/components/pages/Page';

export default function PreferencesModal(){
    return (<PageContainer>
        <Page title={"Preferences"} modal>
            <Text>
                Preferences
            </Text>
        </Page>
    </PageContainer>);
};
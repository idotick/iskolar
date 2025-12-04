import { Text } from "react-native";

import PageContainer from "@/components/containers/PageContainer";
import { ModalPage} from "@/components/pages/Page";

export default function PreferencesModal(){
    return (<PageContainer>
        <ModalPage title={"Preferences"}>
            <Text>
                Preferences
            </Text>
        </ModalPage>
    </PageContainer>);
};
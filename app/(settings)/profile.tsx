import { useEffect, useState } from "react";

import { ActivityIndicator, StyleSheet, Text } from "react-native";

import { requestUserInfo, UserInfo } from "@/handlers/User";

import PageContainer from "@/components/containers/PageContainer";

import { ModalPage } from "@/components/pages/Page";

import { batchToGrade, extractBatch } from "@/util/Helpers";
import { globalStyles } from "@/util/Styles";
import { useTheme } from "@/constants/Theme";
import { ProfileField } from "@/components/profile/ProfileField";

export default function ProfileModal(){
    const [ userData, setUserData ] = useState<UserInfo | null>(null);
    
    async function setupUserData(){
        const data = await requestUserInfo();

        if (!data){
            return;
        }

        setUserData(data);
    }

    useEffect(() => {
        setupUserData();
    }, []);

    if (!userData){
        return (<PageContainer>
            <ModalPage title={"Preferences"}>
                <ActivityIndicator style={styles.loading} size={"large"} color={"white"}/>
            </ModalPage>
        </PageContainer>);
    }

    const batch: string = extractBatch(userData.id)!;

    return (<PageContainer>
        <ModalPage title={"Profile"} contentStyle={styles.page} >
            <ProfileField name={"Name"} content={userData.name}/>
            <ProfileField name={"Email"} content={userData.email}/>
            <ProfileField name={"Batch"} content={batch}/>

        </ModalPage>

    </PageContainer>);
};

const styles = StyleSheet.create({
    page: {
        paddingTop: 16
    },

    loading: {
        alignSelf: "center"
    }
});
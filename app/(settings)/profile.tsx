import { useEffect, useState } from "react";

import { ActivityIndicator, StyleSheet, Text } from "react-native";

import { requestUserInfo, UserInfo } from "@/handlers/User";

import PageContainer from "@/components/containers/PageContainer";

import Page from '@/components/pages/Page';

import { ProfileField } from "@/components/profile/ProfileField";

import { batchToGrade, extractBatch } from "@/util/Helpers";
import { globalStyles } from "@/util/Styles";

import { useTheme } from "@/constants/Theme";

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
            <Page modal title={"Preferences"}>
                <ActivityIndicator style={styles.loading} size={"large"} color={"white"}/>
            </Page>
        </PageContainer>);
    }

    const batch: string = extractBatch(userData.id)!;

    return (<PageContainer>
        <Page title={"Profile"} contentStyle={styles.page} modal>
            <ProfileField name={"Name"} content={userData.name}/>
            <ProfileField name={"Email"} content={userData.email}/>
            <ProfileField name={"Batch"} content={batch}/>

        </Page>

    </PageContainer>);
};

const styles = StyleSheet.create({
    page: {
        
    },

    loading: {
        alignSelf: "center"
    }
});
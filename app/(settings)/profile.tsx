import { useEffect, useState } from "react";

import { ActivityIndicator, StyleSheet, Text } from "react-native";

import { requestUserInfo, UserInfo } from "@/handlers/User";

import PageContainer from "@/components/containers/PageContainer";

import { ModalPage } from "@/components/pages/Page";

import { batchToGrade, extractBatch } from "@/util/helpers";
import { globalStyles } from "@/util/styles";

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
        <ModalPage title={"Preferences"}>
            <Text style={styles.field}>
                <Text style={globalStyles.bold}> Name: </Text> {userData.name}
            </Text>

            <Text style={styles.field}>
                <Text style={globalStyles.bold}> Email: </Text> {userData.email}
            </Text>

            <Text style={styles.field}>
                <Text style={globalStyles.bold}> Batch: </Text> {batch}
            </Text>

            <Text style={styles.field}>
                <Text style={globalStyles.bold}> Grade: </Text> Grade {batchToGrade(batch)}
            </Text>

        </ModalPage>

    </PageContainer>);
};

const styles = StyleSheet.create({
    field: {
        marginBottom: 4,

        paddingLeft: 8,
        paddingVertical: 8,

        borderWidth: 1,
        borderColor: "white",

        color: "white"
    },

    loading: {
        alignSelf: "center"
    }
});
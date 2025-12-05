import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native"

import RowContainer from "../containers/RowContainer";
import Container from "../containers/Container";
import ProfileCard from "../cards/ProfileCard";
import { Text, StyleSheet } from "react-native";
import { Card } from "../cards/Card";

import { requestUserInfo, UserInfo } from "@/handlers/User";

export default function ProfilePreview(){
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
        return (<RowContainer>
            <ProfileCard style={styles.profile} size={64}/>
            <ActivityIndicator size="large" color={"white"}/>
        </RowContainer>);
    }

    const firstName: string = userData.name.split(" ")[0];

    return (<Container style={styles.container}>
        <Text style={styles.hello}> Hello {firstName}! </Text>
        <Card style={styles.description}>
            <Text style={styles.card_subtext}> 11 Rigel </Text>
            <Text style={styles.card_subtext}> Intern </Text>
        </Card>
    </Container>);
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 128,
    },

    profile: {
        width: "40%",
        marginRight: 16,
    },

    description: {
        width: "100%",

        height: 72
    },

    hello: {
        marginTop: 16,
        marginBottom: 16,

        fontWeight: "bold",
        fontSize: 24,
    },

    card_subtext: {
        marginLeft: 12,
        marginTop: 8,

        fontWeight: "500",
        fontSize: 16,
    },
});


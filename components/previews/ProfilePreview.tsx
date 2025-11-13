import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native"

import RowContainer from "../containers/RowContainer";
import Container from "../containers/Container";
import ProfileCard from "../cards/ProfileCard";
import { Text, StyleSheet } from "react-native";
import { Card } from "../cards/Card";

import { requestUserInfo, UserInfo } from "@/handlers/user";

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

    const nameParts: string[] = userData.name.split(" ");

    return (<RowContainer>
        <ProfileCard style={styles.profile} size={64}/>
        <Container>
            <Text style={styles.hello}> Hello {nameParts[0]}! </Text>
            <Card border_radius={16} style={styles.description}>
                <Text style={styles.card_subtext}> 11 - RIGEL </Text>
                <Text style={styles.card_subtext}> INTERN </Text>
            </Card>
        </Container>
    </RowContainer>);
};

const styles = StyleSheet.create({
    profile: {
        width: "40%",
        marginRight: 16,
    },

    description: {
        width: 192,

        height: 72
    },

    hello: {
        marginTop: 16,
        marginBottom: 16,

        fontWeight: "bold",
        fontSize: 24,

        color: "white",
    },

    card_subtext: {
        marginLeft: 12,
        marginTop: 8,

        fontWeight: "500",
        fontSize: 16,

        color: "white",
    },
});


import RowContainer from "../containers/RowContainer";
import Container from "../containers/Container";
import ProfileCard from "../cards/ProfileCard";
import { Text, StyleSheet } from "react-native";
import { Card } from "../cards/Card";

export default function ProfilePreview(){
    return (<RowContainer>
        <ProfileCard style={styles.profile} size={64}/>
        <Container>
            <Text style={styles.hello}> Hello Julai! </Text>
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


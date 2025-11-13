import { Text, StyleSheet, ViewProps } from "react-native";

import { Card } from "../cards/Card";

import RowContainer from "../containers/RowContainer";

export default function SchedulePreview( { style }: ViewProps ){
    return (<Card border_radius={16} style={[styles.container, style]}>
        <RowContainer>
            <Text style={styles.card_subtext}> CLASS SCHEDULE </Text>
        </RowContainer>
        
        <RowContainer>
            <Text style={[styles.card_text, {color: "#b7caffff"}]}> Mathematics 5 </Text>
            <Text style={[styles.card_text, {right: -40}]}> 7:20 to 8:10 </Text>
        </RowContainer>
    </Card>);
}

const styles = StyleSheet.create({
    container: {

    },

    card_subtext: {
        marginLeft: 12,
        marginTop: 8,

        fontWeight: "500",
        fontSize: 16,

        color: "white",
    },

    section_link: {
        position: "absolute",

        bottom: 8,
        right: 8,
    },

    link_text: {
        fontWeight: "bold",
        fontSize: 16,

        color: "white",
    },

    card_text: {
        marginLeft: 12,
        marginTop: 8,
        marginBottom: 16,

        fontWeight: "500",
        fontSize: 20,

        color: "white",
    },
});

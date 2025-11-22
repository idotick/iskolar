import { View, ViewProps, FlatList, StyleSheet, Text } from "react-native";

import { Link } from "expo-router";

import { FontAwesome } from "@expo/vector-icons";

import { Card } from "../cards/Card";
import RowContainer from "../containers/RowContainer";

type AnnouncementsPreviewProps = ViewProps & {
    data: any[]
};

type AnnouncementPreviewItemProps = {
    content: string
};

function AnnouncementPreviewItem( { content }: AnnouncementPreviewItemProps ){
    return (<View style={styles.item}>
        <FontAwesome name="bell" size={16} color={"white"} style={styles.itemIcon}/>
        <Text style={styles.itemText}> { content.toUpperCase() } </Text>
    </View>);
}

export default function AnnouncementsPreview( { data, style }: AnnouncementsPreviewProps ){
    return (<Card style={[styles.container, style]} border_radius={16}>

        <RowContainer>
            <Text style={styles.cardSubtext}> ANNOUNCEMENTS </Text>
            <Text style={[styles.cardSubtext, {marginLeft: 24} ] }> September 8, 2025 </Text>
        </RowContainer>

        <FlatList style={styles.list} data={data} scrollEnabled={false} renderItem={({ item }) => {
            return (<AnnouncementPreviewItem content={item} />);
        }} />

        <Link href="/(tabs)/announcements" style={styles.sectionLink}>
            <Text style={styles.linkText}> See More </Text>
        </Link>
    </Card>)
}

const styles = StyleSheet.create({
    container: {

    },

    list: {
        marginTop: 4,
        marginHorizontal: 8,

    },

    item: {
        flexDirection: "row",
        
        marginBottom: 4,

        borderColor: "white",
    },

    itemText: {
        marginLeft: 12,
        paddingVertical: 8,

        fontWeight: "bold",
        fontSize: 12,

        padding: "auto",

        color: "white"
    },

    itemIcon: {
        marginTop: 8,
        marginLeft: 8,
    },

    cardSubtext: {
		marginLeft: 12,
		marginTop: 8,

		fontWeight: "500",
		fontSize: 16,

		color: "white",
	},

    sectionLink: {
		position: "absolute",

		bottom: 12,
		right: 12,
	},

	linkText: {
		fontWeight: "bold",
		fontSize: 16,

		color: "white",
	},
});
import { View, ViewProps, FlatList, StyleSheet, Text } from "react-native";
import { Card } from "../cards/Card";
import RowContainer from "../containers/RowContainer";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
type AnnouncementsPreviewProps = ViewProps & {
    data: any[]
};

type AnnouncementPreviewItemProps = {
    content: string
};

function AnnouncementPreviewItem( { content }: AnnouncementPreviewItemProps ){
    return (<View style={styles.item}>
        <FontAwesome name="bell" size={16} color={"white"} style={styles.item_icon}/>
        <Text style={styles.item_text}> { content.toUpperCase() } </Text>
    </View>);
}

export default function AnnouncementsPreview( { data, style }: AnnouncementsPreviewProps ){
    return (<Card style={[styles.container, style]} border_radius={16}>

        <RowContainer>
            <Text style={styles.card_subtext}> ANNOUNCEMENTS </Text>
            <Text style={[styles.card_subtext, {marginLeft: 24} ] }> September 8, 2025 </Text>
        </RowContainer>

        <FlatList style={styles.list} data={data} renderItem={({ item }) => {
            return (<AnnouncementPreviewItem content={item} />);
        }} />

        <Link href="/(tabs)/announcements" style={styles.section_link}>
            <Text style={styles.link_text}> See More </Text>
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

    item_text: {
        marginLeft: 12,
        paddingVertical: 8,

        fontWeight: "bold",
        fontSize: 12,

        padding: "auto",

        color: "white"
    },

    item_icon: {
        marginTop: 8,
        marginLeft: 8,
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

		bottom: 12,
		right: 12,
	},

	link_text: {
		fontWeight: "bold",
		fontSize: 16,

		color: "white",
	},
});
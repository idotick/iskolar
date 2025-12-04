import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { NotifData } from "./NotificationList";
import { capitalize } from "@/util/helpers";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type NotificationItemProps = {
    data: NotifData,
    style?: ViewStyle
};


export default function NotificationItem( { data, style }: NotificationItemProps ){
    return (<View style={[styles.container, style]}>
        <Ionicons name={"megaphone"} size={18}/>
        <Text style={styles.label}>
            {capitalize(data.name)}
        </Text>
    </View>);
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",

        margin: 8,
        padding: 12,

        gap: 12,

        borderRadius: 18,
        
        backgroundColor: "white",
        
    },

    label: {
        fontSize: 16,
        fontWeight: "bold"
    }
})
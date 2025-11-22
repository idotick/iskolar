import { StyleSheet, Text, View } from "react-native";
import { NotifData } from "./NotificationList";
import { capitalize } from "@/util/helpers";

type NotificationItemProps = {
    data: NotifData
};


export default function NotificationItem( { data }: NotificationItemProps ){
    return (<View style={styles.container}>
        <Text style={styles.label}>
            {capitalize(data.name)}
        </Text>
    </View>);
}
const styles = StyleSheet.create({
    container: {

        padding: 12,

        marginVertical: 1,
        
        backgroundColor: "white"
    },

    label: {

    }
})
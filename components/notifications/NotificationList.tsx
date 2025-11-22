import { FlatList, StyleSheet, Text, View } from "react-native";
import NotificationItem from "./NotificationItem";

export type NotifData = {
    id: string,
    name: string,
    content: string
};

type NotificationListProps = {
    data: NotifData[]
};

export default function NotificationList( { data }: NotificationListProps ){

    return (<View style={styles.container}>
        <FlatList style={styles.list} data={data} scrollEnabled={false} renderItem={({item}) => {
            return (<NotificationItem data={item}/>);
        }}>

        </FlatList>
    </View>);
}

const styles  = StyleSheet.create({
    container: {
        flex: 1
    },

    list: {
        flex: 1
    },

    item: {
        padding: 12,
        
        backgroundColor: "white"
    },

    itemLabel: {

    }
});
import { FlatList, StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";
import NotificationItem from "./NotificationItem";

export type NotifData = {
    id: string,
    name: string,
    content: string
};

type NotificationListProps = {
    data: NotifData[],
    style?: ViewStyle
};

export default function NotificationList( { data, style }: NotificationListProps ){

    return (<View style={[styles.container, style]}>
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
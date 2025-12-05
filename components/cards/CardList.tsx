import { FlatList, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Card } from './Card';
import { ItemCard } from "./ItemCard";

type CardListProps = {
    data: any[]
    style?: StyleProp<ViewStyle>
};

export function CardList( { data, style }: CardListProps ){
    return (<FlatList data={data} horizontal style={[styles.container, style]} renderItem={({item}) => {return <ItemCard/>}}/>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
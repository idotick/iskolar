import { StyleSheet, View } from "react-native";
import { CardProps } from "./Card";
import { LinearGradient } from "expo-linear-gradient";

type ItemCardProps = CardProps;

export function ItemCard( { border_radius }: ItemCardProps ) {
    return (<View style={[styles.container, {borderRadius: border_radius}]}>
         <LinearGradient start={[0, 1]} end={[1, 0]} colors={["#726a58d3", "transparent"]} style={[ styles.gradient, {borderRadius: border_radius}]}/>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",

        flex: 1,

        width: 120,

        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: "white",
    },

    gradient: {
        position: "absolute",

        flex: 1,

        width: "100%",
        height: "100%",
    },
});

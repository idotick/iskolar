import { ExternalPathString, Link, RelativePathString } from "expo-router";
import { StyleSheet, ViewProps, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type CardProps = ViewProps & {
    border_radius: number
};

export function Card({ children, style, border_radius }: CardProps){
    return (
        <View style={[styles.container, style, {borderRadius: border_radius}]}>
            <LinearGradient start={[0, 1]} end={[1, 0]} colors={["#303235d3", "transparent"]} style={[ styles.gradient, {borderRadius: border_radius}]}/>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        overflow: "hidden",

        borderWidth: 1,
        borderColor: "white",
    },

    gradient: {
        position: "absolute",

        flex: 1,

        width: "100%",
        height: "100%",
    },

    link: {
        flex: 1
    }
});
import { ExternalPathString, Link, RelativePathString } from "expo-router";
import { StyleSheet, ViewProps, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/constants/Theme";

export type CardProps = ViewProps;

export function Card({ children, style }: CardProps){
    const theme = useTheme();

    const themeStyle = {
        backgroundColor: theme.colors.secondary
    };

    return (
        <View style={[styles.container, style, themeStyle]}>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
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
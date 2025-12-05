
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Button, IconButton } from "react-native-paper";

import { useTheme } from "@/constants/Theme";

type GradeViewProps = {
    name: string,
    value: number,
    style?: ViewStyle
    onChange: (name: string, change: number) => void
};

export default function GradeView( { name, value, style, onChange }: GradeViewProps ){
    const theme = useTheme();

    const themeStyle = {
        backgroundColor: theme.colors.primary,
    };

    return (<View style={[styles.container, style, themeStyle]}>
        <Text style={styles.label}> {name} </Text>

        <View style={styles.row}>
            <Text style={styles.grade}> {value.toFixed(2)} </Text>
            <IconButton icon={"plus"} containerColor={theme.colors.tertiary} onPress={() => onChange(name, .25)}/>
            <IconButton icon={"minus"} containerColor={theme.colors.tertiary} onPress={() => onChange(name, -.25)}/>
        </View>
       
    </View>);
};

const styles = StyleSheet.create({
    container: {
        width: 256,
        height: 108,

        marginBottom: 24,

        paddingVertical: 8,
        paddingHorizontal: 16,

        borderRadius: 18,
        borderColor: "black",
        borderWidth: 2,
    },

    label: {
        marginTop: 12,

        fontWeight: "bold"
    },

    grade: {
        fontWeight: "bold",

        fontSize: 36,

        marginRight: 24,
    },

    row: {
        flexDirection: "row"
    }
});
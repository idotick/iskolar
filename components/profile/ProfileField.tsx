import { useTheme } from "@/constants/Theme";
import { Text } from "react-native";
import { StyleSheet, View, ViewProps } from "react-native";

type ProfileFieldProps = {
    name: string,
    content: string
} & ViewProps;

export function ProfileField( { name, content, style }: ProfileFieldProps ){
    const theme = useTheme();

    const themeStyle = {
        backgroundColor: theme.colors.secondary
    };

    return (<View style={[styles.container, style, themeStyle]}>
        <Text style={styles.content}>
            <Text style={styles.label}>{name}:</Text> {content}
        </Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",

        flexDirection: "row",

        width: "95%",
        height: 48,

        marginBottom: 8,
        
        borderRadius: 24,
    },


    content: {
        flex: 1,

        marginLeft: 24,

        textAlignVertical: "center"
    },

    label: {
        fontWeight: "bold"
    }
    
});
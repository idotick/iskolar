import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle, Text } from "react-native";

type AuthButtonProps = {
    name: string,
    onAction: () => void,
    style?: StyleProp<ViewStyle>
};

export default function AuthButton({ name, onAction, style }: AuthButtonProps ) {
    return (<TouchableOpacity style={[style, styles.button]} onPress={onAction}>
        <Text style={styles.label}>
            { name.toUpperCase() }
        </Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",

        width: 256,
        height: 64,

        borderRadius: 24,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#030307ff"
    },

    label: {
        position: "absolute",
        fontSize: 24,
        fontWeight: "bold",

        color: "white"
    },

    progress: {
        position: "absolute",
    }
});
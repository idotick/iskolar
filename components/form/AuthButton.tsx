import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle, Text } from "react-native";

type AuthButtonProps = {
    name: string,
    on_press: () => void,
    style?: StyleProp<ViewStyle>
};

export default function AuthButton({ name, on_press, style }: AuthButtonProps ) {
    return (<TouchableOpacity style={[style, styles.button]} onPress={on_press}>
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
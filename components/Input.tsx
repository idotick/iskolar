import { View, StyleSheet, Text, StyleProp, ViewStyle, TextInput } from "react-native";


type FormInputProps = {
    name: string,
    content: string,
    on_change: (value: string) => void,
    secured?: boolean
    style?: StyleProp<ViewStyle>,
};

export function FormInput ( { name, content, on_change, style, secured }: FormInputProps ) {
    return (<View style={[style, styles.container]}>
        <Text style={styles.label}> { name } </Text>

        <TextInput style={styles.input} value={content} onChangeText={on_change} secureTextEntry={secured}/>
    </View>);
}


const styles = StyleSheet.create({
    container: {
        alignSelf: "center",

        width: "80%",
        height: 48,

        borderRadius: 20,

        marginBottom: 16,

        backgroundColor: "#00000040"
    },

    label: {
        flex: 1,
        position: "absolute",
        
        marginLeft: 12,
        marginTop: 2,

        fontWeight: "bold",

        color: "white"
    },

    input: {
        flex: 1,

        marginLeft: 12,
        marginTop: 12,
    }
});

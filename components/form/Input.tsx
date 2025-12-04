
import { View, StyleSheet, Text, StyleProp, ViewStyle, TextInput } from "react-native";
import Animated  from 'react-native-reanimated';

type FormInputProps = {
    name: string,
    content: string,
    onChange: (value: string) => void,
    secured?: boolean,
    style?: StyleProp<ViewStyle>
};

export function FormInput ( { name, content, style, secured, onChange }: FormInputProps ) {
    return (<Animated.View style={[style, styles.container]}>
        <Text style={styles.label}> { name } </Text>

        <TextInput style={styles.input} value={content} onChangeText={onChange} secureTextEntry={secured}/>
    </Animated.View>);
}

export function SmallFormInput ( { name, content, onChange, style, secured }: FormInputProps ) {
    return (<View style={[style, styles.container, styles.halfContainer]}>
        <Text style={styles.label}> { name } </Text>

        <TextInput style={styles.input} value={content} onChangeText={onChange} secureTextEntry={secured}/>
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

    halfContainer: {
        width: "39%",
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

        outlineWidth: 0,

        marginLeft: 12,
        marginTop: 12,
    },
});

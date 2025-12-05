import { StyleSheet, ViewProps, View } from "react-native";

export default function Container( { style, children }: ViewProps ){
    return (<View style={[styles.container, style]}>
        { children }
    </View>)
}

const styles = StyleSheet.create({
    container: {
        
    },
})
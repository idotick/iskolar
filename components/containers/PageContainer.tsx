import { StyleSheet, ViewProps, View } from "react-native";

export default function PageContainer( { style, children }: ViewProps ){
    return (<View style={[styles.container]}>
        { children }
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
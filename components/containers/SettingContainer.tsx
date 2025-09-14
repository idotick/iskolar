import { StyleSheet, View, ViewProps } from "react-native";

export default function SettingContainer( { children, style }: ViewProps ){
    return (<View style={[styles.container, style]}>
        { children }
    </View>);
}

const styles = StyleSheet.create({
    container: {
        
    }
});
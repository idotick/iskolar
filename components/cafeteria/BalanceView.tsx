import { StyleSheet, Text, View, ViewProps } from "react-native";

type BalanceViewProps = {
    balance?: number
} & ViewProps;

export default function BalanceView( { balance, style }: BalanceViewProps){
    return (<View style={[styles.container, style]}>
        <Text style={styles.label}> BALANCE </Text>
        <Text style={styles.text}> { balance } </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {

    },

    label: {

    },

    text: {

    }
});
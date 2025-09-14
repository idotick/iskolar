import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type AlertProps = {
    message?: string,
} & ViewProps;

export default function AuthAlert( { style, message }: AlertProps ){
    const [ content, set_content ] = useState<string>("");

    const opacity = useSharedValue(0);

    function enter(){
        opacity.value = withTiming(1);
    }

    function exit() {
        opacity.value = withTiming(0);
    }

    useEffect(() => {
        if (!message){
            exit();
            return;
        }

        if (!message?.length){
            exit;
            return;
        }

        set_content(message);
        enter();

    }, [message]);

    const animated_style = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    });

    return (<Animated.View style={[styles.container, style, animated_style]}>
        <Text style={styles.text}> { content } </Text>
    </Animated.View>);
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",

        color: "red"
    }
});
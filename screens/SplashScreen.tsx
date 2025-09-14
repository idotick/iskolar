import { ActivityIndicator, StyleSheet, View, Text, Image, ImageBackground } from "react-native";

const background_image = require('@/assets/images/background.jpg');
const title_text = require('@/assets/images/iskolar-text.png');

export default function SplashScreen() {
    return (<View style={styles.container}>
        <ImageBackground
				source={background_image}
				style={styles.background}
				imageStyle={{ opacity: 0.7 }}
		/>
        <Image source={title_text} style={styles.title} />

        <ActivityIndicator size="large" color={"white"}/>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
    },

    title: {
        transform: [{scale: 0.75}],

        marginTop: 280,
        marginBottom: 32
    },

        background: {
        position: "absolute",

        width: '100%',
		height: '100%',

    },
})
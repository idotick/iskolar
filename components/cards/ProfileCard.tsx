
import { StyleProp, View, ViewStyle, StyleSheet, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ProfileCardProps = {
    size: number,
    style?: StyleProp<ViewStyle>
};

const profile_image = require('@/assets/images/profile.png');

export default function ProfileCard( { style, size } : ProfileCardProps){
    return (<View style={[styles.container, style]}>
        <Image source={profile_image} style={styles.icon} />
    </View>);
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",

        aspectRatio: 1,

        backgroundColor: "white",

        borderRadius: 96,
        borderWidth: 1,
        borderColor: "white",
        
    },

    icon: {
        width: "100%",
        height: "100%",
        aspectRatio: 1,
    }
});
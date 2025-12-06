import { Linking } from "react-native";

export async function openLink(url: string){
    const supported = await Linking.canOpenURL(url);

    if (!supported){
        console.error("Unable to open url: " + url);
        return 1;
    }

    await Linking.openURL(url);

    return 0;
};
import { ReactNode } from "react";

import { StyleSheet, View, Text, ViewStyle, Pressable } from "react-native";

import { Href, Link, Router, useRouter } from "expo-router";

import { useTheme } from "@/constants/Theme";

import { capitalize } from "@/util/Helpers";

type SectionLinkProps = {
    href: Href
    name: string,
    description?: string

    icon?: ReactNode,
    style?: ViewStyle
};

export default function SectionLink( { href, name, description, icon, style }: SectionLinkProps ){
    const theme = useTheme();

    const router: Router = useRouter();

    const themeStyle = {
        backgroundColor: theme.colors.secondary
    };

    function openSection() {
        router.push(href);
    }
    
    return (<View style={[styles.container, style, themeStyle]}>
        <Pressable style={styles.link} onPress={openSection}>

            <View style={styles.icon}>
                {icon}
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>
                    {capitalize(name)}
                </Text>

                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </Pressable>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",

        width: "95%",
        height: 56,

        marginBottom: 4,

        borderRadius: 24,
    },

    link: {
        flex: 1,

        flexDirection: "row",
        
        width: "100%",
        height: "100%",

        paddingTop: 8,
        paddingLeft: 16,
    },

    info: {
    },

    icon: {
        marginRight: 24
    },

    label: {
        textAlign: "center",
        textAlignVertical: "center",
        
        alignSelf: "flex-start",

        fontWeight: "bold",
        fontSize: 18,
    },

    description: {
        fontSize: 12,
    }
});
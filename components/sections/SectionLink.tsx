import { useTheme } from "@/constants/Theme";
import { capitalize } from "@/util/helpers";
import { Href, Link } from "expo-router";
import { ReactNode } from "react";
import { StyleSheet, View, Text, ViewStyle } from "react-native";

type SectionLinkProps = {
    href: Href
    name: string,
    description?: string

    icon?: ReactNode,
    style?: ViewStyle
};

export default function SectionLink( { href, name, description, icon, style }: SectionLinkProps ){
    const theme = useTheme();

    const themeStyle = {
        backgroundColor: theme.colors.primary
    };
    
    return (<View style={[styles.container, style, themeStyle]}>
        <Link href={href} style={styles.link}>
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
        </Link>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",

        flexDirection: "row",

        width: "90%",
        height: 48,

        marginBottom: 4,

        paddingTop: 8,
        paddingLeft: 16,

        borderRadius: 24,
    },

    link: {
        flex: 1,
        
        width: "100%",
        height: "100%",
    },

    info: {
        marginTop: 10,
    },

    icon: {
        marginTop: -8,
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
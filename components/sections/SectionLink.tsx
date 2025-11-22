import { capitalize } from "@/util/helpers";
import { Href, Link } from "expo-router";
import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";

type SectionLinkProps = {
    href: Href
    name: string,
    description?: string

    icon?: ReactNode,
};

export default function SectionLink( { href, name, description, icon}: SectionLinkProps ){
    return (<Link style={styles.link} href={href}>
        <View style={styles.container}>
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
        </View>
    </Link>);
}

const styles = StyleSheet.create({
    link: {
        width: "100%",
        height: 64,

        marginBottom: 2,
    },

    info: {
        flex: 1,

        marginTop: 10,
        marginLeft: 12
    },

    icon: {
        marginTop: 6,
    },

    container: {
        flex: 1,
        flexDirection: "row",

        justifyContent: "center",

        width: "100%",
        height: "100%",

        paddingLeft: 16,

        backgroundColor: "lightgray",
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
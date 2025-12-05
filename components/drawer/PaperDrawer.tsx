import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Router, usePathname, useRouter, Link, Href } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";
import { Drawer } from "react-native-paper";

type PaperDrawerItemProps = {
    href: Href,
    label: string,
};

function PaperDrawerItem( { href, label }: PaperDrawerItemProps ){
    const router: Router = useRouter();
    const activePath: string = usePathname();

    return (<Drawer.Item
        label={label}
        active={href.toString()==activePath}
        onPress={() => router.push(href)}
    />);
}

export default function PaperDrawer(props: any) {

    return (<DrawerContentScrollView {...props}>
        <View style={styles.title}>
            <Text style={styles.titleText}>iskolar</Text>
        </View>

        <Drawer.Section showDivider={false}>

            <PaperDrawerItem href={"/"} label={"Home"} />

            <PaperDrawerItem href={"/announcements"} label={"Announcements"} />

            <PaperDrawerItem href={"/items"} label={"Lost & Found"} />

            <PaperDrawerItem href={"/calculator"} label={"GWA Calculator"} />

        </Drawer.Section>
        
    </DrawerContentScrollView>);
}

const styles = StyleSheet.create({
    title: {
        marginTop: 8,
        marginBottom: 24,

        marginLeft: 24,
    },

    titleText: {
        fontSize: 24,

        fontWeight: "bold",
    }
});
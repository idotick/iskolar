import { feedbackURL } from "@/handlers/Feedback";
import { openLink } from "@/util/Link";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Router, usePathname, useRouter, Link, Href } from 'expo-router';
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { Drawer } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

type PaperDrawerItemProps = {
    href: Href | string,
    icon: IconSource,
    label: string,
    external?: boolean
} & ViewProps;

type DrawerPath = {
    path: string,
    external?: boolean
};

function PaperDrawerItem( { href, label, icon, external, style }: PaperDrawerItemProps ){
    const activePath: string = usePathname();
    const router: Router = useRouter();

    let active = href === activePath;

    return (<Drawer.Item
        icon={icon}
        label={label}
        style={[style]}
        active={href.toString()==activePath}
        onPress={() => {
            if (external){
                openLink(href as string);
            }

            else {
                router.push(href as Href);
            }
        }}
    />);
}

export default function PaperDrawer(props: any) {
    async function redirectToFeedback(){
        const code: number = await openLink(feedbackURL);

        if (code){
            return;
        }
    }

    return (<DrawerContentScrollView {...props}>
        <View style={styles.title}>
            <Text style={styles.titleText}>iskolar</Text>
        </View>

        <Drawer.Section showDivider={false}>

            <PaperDrawerItem href={{pathname: "/"}} icon={({size}) => <MaterialCommunityIcons name="home" size={size}/>} label={"Home"} />

            <PaperDrawerItem href={{pathname: "/announcements"}} icon={({size}) => <MaterialCommunityIcons name="bullhorn" size={size}/>} label={"Announcements"} />

            <PaperDrawerItem href={{pathname: "/items"}} icon={({size}) => <MaterialCommunityIcons name="shopping-search" size={size}/>} label={"Lost & Found"} />

            <PaperDrawerItem href={{pathname: "/calculator"}} icon={({size}) => <MaterialCommunityIcons name="calculator" size={size}/>} label={"GWA Calculator"} />

            <PaperDrawerItem href={{pathname: "/cafeteria"}} icon={({size}) => <MaterialCommunityIcons name="food" size={size}/>} label={"GWA Calculator"} />

            <PaperDrawerItem href={feedbackURL} icon={({size}) => <MaterialCommunityIcons name="star" size={size}/>} label={"Feedback"} />
            
        </Drawer.Section>
        
    </DrawerContentScrollView>);
}

const styles = StyleSheet.create({
    title: {
        width: "120%",
        height: 48,
        
        marginTop: 8,
        marginBottom: 24,
        marginLeft: -24,
        
        paddingLeft: 48,

        backgroundColor: "#444dc7ff"
    },

    titleText: {
        height: "100%",

        fontSize: 24,

        fontWeight: "bold",

        textAlignVertical: "center",

        color: "white",
    },

    item: {

    }
});
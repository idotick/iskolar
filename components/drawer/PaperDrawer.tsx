import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Router, usePathname, useRouter, Link, Href } from 'expo-router';
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
        <Drawer.Section title={"School"} showDivider={false}>
            <PaperDrawerItem href={"/"} label={"Home"} />
            <PaperDrawerItem href={"/announcements"} label={"Announcements"} />
            <PaperDrawerItem href={"/items"} label={"Lost & Found"} />
        </Drawer.Section>
        
    </DrawerContentScrollView>);
}
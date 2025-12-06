import { useState } from 'react';

import { Text, StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';

import { Banner, Dialog, Portal, Button, Searchbar} from 'react-native-paper';

import { Entypo } from '@expo/vector-icons';

import Page from '@/components/pages/Page';
import PageContainer from '@/components/containers/PageContainer';
import TagScanner from '@/components/scanners/TagScanner';
import ScannerDialog from '@/components/scanners/ScannerDialog';
import { useTheme } from '@/constants/Theme';
import { Bold } from '@/components/utility/Text';



export default function ItemsScreen() {
    const theme = useTheme();

    const [ scanning, setScanning ] = useState<boolean>(false);

    const [ scanned, setScanned ] = useState<string>("");

    const [ dialogVisible, setDialogVisible ] = useState<boolean>(false);

    const [ query, setQuery ] = useState<string>("");

    function onScanned(data: string){
        setScanned(data);
        setScanning(false);
        setTimeout(() => setDialogVisible(true), 100);
    }

    const themedStyle = {
		backgroundColor: theme.colors.secondary
	};
    
    return (
        <PageContainer>
            <Page title={"Lost & Found"} style={styles.page}>
                <Banner visible actions={[{label: "OPEN CAMERA", onPress: () => setScanning(true) }]} icon={({ size }) => {
                    return <Entypo size={size} name={"shopping-bag"}/>
                }}>
                    Found a lost item? If it has an UNLAD supported sticker, scan now to report it to the owner. Either way, please return it to the <Bold>Discipline Office</Bold>.
                </Banner>

                <View style={styles.search}>
                    <Searchbar placeholder={"Search for a lost item "} placeholderTextColor={theme.colors.tertiary} style={themedStyle} value={query} onChangeText={setQuery} iconColor={"black"}/>
                </View>

                <TagScanner scanning={scanning} onScan={onScanned} onExit={() => setScanning(false)}/>

                <ScannerDialog active={dialogVisible} data={scanned} onDismiss={() => setDialogVisible(false)}/>
                
            </Page>
        </PageContainer>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,

        width: "100%",
        height: "100%",
    },

    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        height: "100%",
    },

    search: {
		alignSelf: "center", 

		width: "86%", 

		marginTop: 24 
	},

    message: {       
        fontSize: 16,

        fontWeight: "bold",

        color: "#ffffff"
    },

    button: {
        alignItems: "center",
        
        width: 128,

        marginTop: 24,

        padding: 8,

        borderRadius: 24,

        backgroundColor: "lightblue"
    },

    buttonLabel: {
        fontSize: 20,
        fontWeight: "bold"
    }

});

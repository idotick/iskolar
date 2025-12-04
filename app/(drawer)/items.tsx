import { useState } from 'react';

import { Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

import { Page } from '@/components/Page';
import PageContainer from '@/components/containers/PageContainer';
import TagScanner from '@/components/scanners/TagScanner';

function ScannerContainer(){
    const [scanning, setScanning] = useState<boolean>(false);

    function onScan(data: string){
        setScanning(false);

        console.log(data);
    }

    function onExit(){
        setScanning(false);
    }

    function startScan(){
        setScanning(true);
    }

    return (<View style={styles.container}>
        <Text style={styles.message}> Found a lost item? Scan here. </Text>

            <TouchableOpacity style={styles.button} onPress={startScan}>
                <Text style={styles.buttonLabel}> SCAN </Text>
            </TouchableOpacity>

        <TagScanner scanning={scanning} onScan={onScan} onExit={onExit}/>
    </View>);

}

export default function ItemsScreen() {
    return (
        <PageContainer>
            <Page title={"Lost & Found"} style={styles.page}>
                

                <ScannerContainer/>
                
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

    background: {
        position: "absolute",

        width: '100%',
        height: '100%',
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

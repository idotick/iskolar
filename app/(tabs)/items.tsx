import { useState } from 'react';

import { Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

import { Page } from '@/components/Page';
import PageContainer from '@/components/containers/PageContainer';
import TagScanner from '@/components/scanners/TagScanner';

// type ScannerContainerProps = {
//     scanning: boolean,
//     onScan: (data: string) => void,
//     onExit: () => void
// };

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

    function endScan(){
        setScanning(false);
    }

    if (!scanning){
        return (<View style={styles.container}>
            <Text style={styles.message}> Found a lost item? Scan here. </Text>

            <TouchableOpacity style={styles.button} onPress={startScan}>
                <Text style={styles.buttonLabel}> SCAN </Text>
            </TouchableOpacity>
        </View>);
    }

    return (<TagScanner onScan={onScan} onExit={onExit}/>);
}

export default function ItemsScreen() {
    

    return (
        <PageContainer>
            <Page>
                

                <ScannerContainer/>
                
            </Page>
        </PageContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: "100%",
        height: "100%"
    },

    background: {
        position: "absolute",

        width: '100%',
        height: '100%',
    },

    message: {        
        fontSize: 16,

        fontWeight: "bold"
    },

    button: {
        alignItems: "center",
        
        width: 128,

        marginTop: 12,

        padding: 8,

        borderRadius: 24,

        backgroundColor: "lightblue"
    },

    buttonLabel: {
        fontSize: 20,
        fontWeight: "bold"
    }

});

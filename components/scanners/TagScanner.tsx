import { useState } from 'react';

import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CameraView, CameraType, BarcodeScanningResult, useCameraPermissions } from 'expo-camera'
import { MaterialIcons } from '@expo/vector-icons';

type TagScannerProps = {
    onScan: (data: string) => void,
    onExit: () => void
};

export default function TagScanner( { onScan, onExit }: TagScannerProps ) {
    const [permission, requestPermission] = useCameraPermissions();

    const [scanned, setScanned] = useState<string | null>(null);

    if (!permission){
        return (<View style={styles.container}>
            <ActivityIndicator size={"large"} color={"white"}/>
        </View>);
    }

    if (!permission.granted) {
        return (<View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>);
    }

    function onTagScanned(result: BarcodeScanningResult){
        onScan(result.data);
        setScanned(result.data);
    }

    return (<View style={styles.container}>
        <CameraView style={styles.scannerView} facing={'back'} onBarcodeScanned={onTagScanned} barcodeScannerSettings={
            {
                barcodeTypes: ["qr", "ean13", "code39"]
            }
        }/>

        <TouchableOpacity style={styles.exitButton} onPress={onExit}> 
            <MaterialIcons name={"cancel"} size={36} color={"white"}/>
        </TouchableOpacity>
        
        <View style={styles.labelContainer}>
            <Text style={styles.label}> SCAN HERE </Text>
        </View>

         <View style={styles.guide}/>
        
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",

        
    },

    labelContainer: {
        position: "absolute",

        alignSelf: "center",

        width: "100%",

        padding: 8,

        top: 48,


        backgroundColor: "lightblue"

    },

    label: {
        fontSize: 24,

        fontWeight: "bold",

        textAlign: "center",

        color: "white",
    },

    guide: {
        position: "absolute",

        alignSelf: "center",

        width: "75%",

        aspectRatio: 1,

        borderWidth: 2,
        borderColor: "white",
        borderStyle: "dashed"
    },

    message: {
        fontSize: 24,
    },

    scannerView: {
        flex: 1,

        borderRadius: 12,
        overflow: "hidden",

        width: "100%",
        height: "100%",
    },

    exitButton: {
        position: "absolute",

        top: 8,
        right: 8
    }
});
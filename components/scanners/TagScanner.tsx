import { useEffect, useState } from 'react';

import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

import { CameraView, CameraType, BarcodeScanningResult, useCameraPermissions } from 'expo-camera'

import { MaterialIcons } from '@expo/vector-icons';

import { PointerEventType } from '@/util/Types';

type TagScannerProps = {
    scanning: boolean,
    onScan: (data: string) => void,
    onExit: () => void
};

export default function TagScanner( { scanning, onScan, onExit }: TagScannerProps ) {
    const [permission, requestPermission] = useCameraPermissions();

    const opacity = useSharedValue(1);

    useEffect(() => {
        if (scanning){
            opacity.value = withSpring(1);
        }
        
        else {
            opacity.value = withSpring(0);
        }

    }, [scanning]);

    if (!permission){
        return (<View style={styles.container}>
            <ActivityIndicator size={"large"} color={"white"}/>
        </View>);
    }

    function onTagScanned(result: BarcodeScanningResult){
        onScan(result.data);
    }

    const pointerEvents: PointerEventType = ((scanning) ? 'auto' : 'none');

    return (<Animated.View pointerEvents={pointerEvents} style={[styles.container, {opacity}]}>
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
        
    </Animated.View>)
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        
        flex: 1,

        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "100%",
    },

    labelContainer: {
        position: "absolute",

        alignSelf: "center",

        width: "100%",

        padding: 8,

        top: 64,


        backgroundColor: "#6a8be480"

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

        borderWidth: 4,
        borderColor: "white",
        borderStyle: "dashed",

        borderRadius: 12,

    },

    message: {
        fontSize: 24,
    },

    scannerView: {
        flex: 1,

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
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class BarcodeScanner extends React.Component {
    constructor(){
        super()
        this.state = {hasCamPermissions:null, scanned:false, scannedData: "", buttonState:"normal"}
    }

    getCamPermission = async() => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({hasCamPermissions:status==="granted",buttonState:"clicked",scanned:false})
    }

    render() {
        const hasCamPermissions = this.state.hasCamPermissions
        const buttonState = this.state.buttonState
        const scanned = this.state.scanned
        if(buttonState==="clicked" && hasCamPermissions) {
            return(
                <BarCodeScanner onBarCodeScanned={scanned? undefined : this.handleBarCodeScanner} style={StyleSheet.absoluteFillObject}></BarCodeScanner>
            )
        }

        else if(buttonState==="normal") {

        return(
            <View>
                
                    <TouchableOpacity>
                        <Text>
                            Scan
                        </Text></TouchableOpacity>
               </View>
        )
    }
    }
}

const styles = StyleSheet.create({
    scanButton:{
        backgroundColor: 'blue',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    }
})

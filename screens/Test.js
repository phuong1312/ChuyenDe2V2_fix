import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert, } from 'react-native';
import Button from '../components/Button';
import { StyledHomeBrownImage, StyledHomeBrownText, SHBZ, StyledTouchable, StyledTouchableImage, StyledTouchableText, StyledContainer, InnerContainer, OLPic, TableStyled, PageTitle, StyledButton, ButtonText } from '../components/styles';
import { Fontisto } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary, neon_blur, light_brand } = Colors;
import { DataTable } from 'react-native-paper';
import { FloatingAction } from "react-native-floating-action";
//note : justifyContent: 'center' : theo height || alignItems: 'center' : theo width || alignItems: 'center'
//note : 2 cai tren chi co tac dung voi the cha chua no || ko dung dc trong ScrollView
const actions = [
    {
        text: "Accessibility",
        icon: require("../assets/image/1.png"),
        name: "bt_accessibility",
        position: 2
    },
    {
        text: "Language",
        icon: require("../assets/image/2.png"),
        name: "bt_language",
        position: 1
    },
    {
        text: "Location",
        icon: require("../assets/image/a8.jpg"),
        name: "bt_room",
        position: 3
    },
    {
        text: "Video",
        icon: require("../assets/image/ava.png"),
        name: "bt_videocam",
        position: 4
    }
];


const Test = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Property
                    propertyName="openOnMount"
                    propertyValue="true"
                    defaultValue="false"
                />
                <FloatingAction
                    openOnMount
                    actions={actions}
                    position="right"
                    onPressItem={name => {
                        Alert.alert("Icon pressed", `the icon ${name} was pressed`);
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },
    container1: {
        borderRadius: 10,
        backgroundColor: primary,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    TouchableImage: {
        elevation: 1,
        padding: 10,
        backgroundColor: primary,
        shadowColor: black,
        shadowOpacity: .5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
})
export default Test 
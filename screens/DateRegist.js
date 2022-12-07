import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Button from '../components/Button';
import { Colors } from '../components/styles';
const { brand, darkLight,black ,primary, secondary} = Colors;


const DateRegist= ({ navigation }) => {
    return (
        <View style={styles.home} >
            <Text style={styles.title}>Trang DateRegist</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
    }
})
export default DateRegist
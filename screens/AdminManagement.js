import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert, } from 'react-native';
import Button from '../components/Button';
import { StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone, StyledTouchable, StyledTouchableImage, StyledTouchableText } from '../components/styles';
import { Fontisto } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary ,neon_blur ,light_brand } = Colors;

//note : justifyContent: 'center' : theo height || alignItems: 'center' : theo width || alignItems: 'center'
//note : 2 cai tren chi co tac dung voi the cha chua no || ko dung dc trong ScrollView

const AdminManagement = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center', flexDirection: "row" }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('TableChoosing')
                            console.log('TableChoosing')
                        }} > 
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/work.png')} ></StyledTouchableImage>
                            <StyledTouchableText> TableChoosing </StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('DateTurnOver')
                            console.log(' Dates TurnOver')
                        }} > 
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/datesale.png')} ></StyledTouchableImage>
                            <StyledTouchableText> Date's TurnOver </StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('MonthTurnOver')
                            console.log('MonthTurnOver')
                        }} > 
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/monthsale.png')} style={styles.img} ></StyledTouchableImage>
                            <StyledTouchableText >  Month's TurnOver </StyledTouchableText>
                        </StyledTouchable>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('DateRegist')
                            console.log('Regist')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/regist1.png')} ></StyledTouchableImage>
                            <StyledTouchableText> Regist Date </StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('TotailExpenditure')
                            console.log('Total Expenditure')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/total.png')} ></StyledTouchableImage>
                            <StyledTouchableText>Total Expenditure</StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('SalaryManagement')
                            console.log('SalaryManagement')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/salary.png')} ></StyledTouchableImage>
                            <StyledTouchableText>SalaryManagemen</StyledTouchableText>
                        </StyledTouchable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    TouchableImage: {
        elevation: 1,
        padding: 20,
        backgroundColor: light_brand,
        shadowColor: black,
        shadowOpacity: .5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        marginTop:"10%",
    },
    img:{
       paddingHorizontal:50
    }
})
export default AdminManagement 
import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SDTBtnText, StyledDrinkTouchableAdd, StyledDrinkTouchableDelete, StyledDrinkTouchableEdit } from '../components/styles'
import { useNavigation } from '@react-navigation/native';
const TabBtn = ({ navigation}) => {
    return (
        <View>
            <StyledDrinkTouchableAdd onPress={() => this.props.navigation.navigate('DrinkAdding')} >
                <SDTBtnText>Add</SDTBtnText>
            </StyledDrinkTouchableAdd>
            <StyledDrinkTouchableDelete  onPress={() => Alert.alert("Deleted")}>
                <SDTBtnText>Delete</SDTBtnText>
            </StyledDrinkTouchableDelete>
            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                <SDTBtnText>Edit</SDTBtnText>
            </StyledDrinkTouchableEdit>
        </View>
    )
}

const styles = StyleSheet.create({})
export default TabBtn

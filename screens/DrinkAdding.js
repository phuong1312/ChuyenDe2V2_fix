import React from "react";
import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Icon
import { Octicons, IonicIcon, Feather } from '@expo/vector-icons';

import SelectDropdown from 'react-native-select-dropdown'

import {
    StyledContainer,
    InnerContainer,
    OLPic,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    StyledTextInput,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Line,
    Colors,
    FormAdd,
    UULabel,
    UUInput,
    FormUpdate,
} from "../components/styles"
import { Formik } from "formik";
import { StyleSheet, View, Text, Alert,Image } from "react-native";
import Button from "../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons';
//Colors 
const { brand, blur, primary, secondary, black, darkLight } = Colors;
const data = ["admin", "phuc vu", "thu ngan",]
const DrinkAdding = ({ navigation }) => {
    const drink =(values)=>{
        if (!values.drinkname || !values.price || !values.category) {
            console.log("them khong thanh cong!");
        } else {
            fetch('http://192.168.43.243:3000/api/drink/add', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(values),
            }).then(res=>res.json()).then(data =>{
                if (data.error) {
                    console .log(data.error);
                } else {
                    console.log(data);
                    Alert.alert("them thanh cong!");
                    return navigation.navigate('Home');
                }
            })
        }
    }
    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br4.png')} ></OLPic>
                <FormUpdate style={styles.TouchableImage} >
                    <PageTitle>Adding Drink</PageTitle>
                    <Formik
                        initialValues={{ drinkname: '', price: '', category: '',}}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label="Drinkname"
                                    placeholder="Drinkname"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('drinkname')}
                                    onBlur={handleBlur('drinkname')}
                                    value={values.drinkname} >
                                </MyTextInput>
                                <MyTextInput
                                    label="Price"
                                    placeholder="Price"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.price}>
                                </MyTextInput>
                                <MyTextInput
                                    label="Category"
                                    placeholder="Category"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('category')}
                                    onBlur={handleBlur('category')}
                                    value={values.category}>
                                </MyTextInput>
                                <Line />
                                <StyledButton
                                    onPress={() => {
                                        drink(values);
                                        // navigation.navigate('Home'),
                                        //     Alert.alert("Done Adding"),
                                            HandleSubmit
                                    }} >
                                    <ButtonText>
                                        Submit
                                    </ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </FormUpdate>
            </InnerContainer>
        </StyledContainer>
    );
}
const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View >
            <UULabel>
                {label}
            </UULabel>
            <UUInput {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    TouchableImage: {
        padding: 20,
        shadowColor: "#1F2937",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 60,
        backgroundColor: secondary,
        borderRadius: 5,
        marginVertical: 10,
        marginBottom: 10,
    },
    dropdown1BtnTxtStyle: {
        color: black,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
    dropdown1DropdownStyle: {
        backgroundColor: secondary
    },
    dropdown1RowStyle: {
        backgroundColor: secondary,
        borderBottomColor: blur
    },
    dropdown1RowTxtStyle: {
        color: black,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
})

export default DrinkAdding;
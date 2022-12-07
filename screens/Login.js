import React, { useState, useEffect, } from "react";
//Icon
import { Octicons, IonicIcon } from '@expo/vector-icons';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    StyledTextInput,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Line,
    Colors,
    FormLog,
} from "../components/styles"
import { Formik } from "formik";
import { Alert, StyleSheet, View } from "react-native";
import publicIP from 'react-native-public-ip';
import {NetworkInfo} from 'react-native-network-info';
import * as Network from 'expo-network';

//Colors 
const { brand, darkLight, primary, blur } = Colors;

const Login = ({ navigation }) => {
    const [ip,setIP] = useState('');
    
    const url = "http://192.168.96.119:3000/api";
    const login = async (values) => {
        // console.log(values.password);
        // fetch(url + '/user/login', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(values),
        // }).then(res => res.json()).then(data => {
        //     // console.log(data);
        //     if (data.error) {
        //         Alert.alert(data.error);
        //     } else {
        //         return navigation.navigate('Home');
        //     }
        // })
        const ip1 = await Network.getIpAddressAsync();
        setIP(ip1);
        console.log(ip1);
    };
    return (
        <StyledContainer >
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/image/a.png')} ></PageLogo>
                <FormLog style={styles.TouchableImage} >
                    <PageTitle>Login</PageTitle>
                    <Formik
                        initialValues={{ user_name: '', password: '' }}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values, hidePassword, setHidePassword }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label="User name"
                                    icon="mail"
                                    placeholder="NameAbc"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('user_name')}
                                    onBlur={handleBlur('user_name')}
                                    value={values.user_name}

                                >
                                </MyTextInput>
                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="* * * * * *"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}
                                >
                                </MyTextInput>
                                <Line />
                                <StyledButton onPress={() => {
                                    login(values);
                                    publicIP().then(ip => {
                                            console.log(ip);
                                            // '47.122.71.234'
                                        })
                                        .catch(error => {
                                            console.log(error);
                                            // 'Unable to get IP address.'
                                        });
                                        
                                    HandleSubmit

                                }} >
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>
                                {/* <StyledButton onPress={() => { navigation.navigate('Test') }}>
                                    <ButtonText>
                                        Test
                                    </ButtonText>
                                </StyledButton> */}
                            </StyledFormArea>
                        )}
                    </Formik>
                </FormLog>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        paddingTop: 20,
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        color: primary,
    },
    container: {
        flex: 1,
        backgroundColor: brand,
    },
    TouchableImage: {
        elevation: 10,
        padding: 20,
        shadowColor: "#1F2937",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },

})

export default Login;



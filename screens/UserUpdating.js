import React, { useState, useEffect } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//Icon
import SelectDropdown from 'react-native-select-dropdown'
import {
    StyledContainer,
    InnerContainer,
    OLPic,
    PageTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    Colors,
    FormAdd,
    UULabel,
    UUInput,
} from "../components/styles"
import { Formik } from "formik";
import { StyleSheet, View, Text, Alert, ScrollView } from "react-native";
//Colors 
const { brand, blur, primary, secondary, black, darkLight } = Colors;
const UserUpdatding = ({ route, navigation }) => {
    //values
    const { id } = route.params;
    const url = "http://192.168.96.119:3000/api";
    const [user, setUser] = useState("");
    const [listRole, setListRole] = useState([""]);
    //get user by id
    const getUser = async () => {
        await fetch(url + '/user/getbyid/' + id)
            .then((res) => res.json())
            .then((res) => {
                var data = res;
                setUser(data);
            })
            .catch((err) => console.log("ERR", err));
    };
    //update user
    const updateUser = (user) => {
        Alert.alert(
            "Thông báo",
            "bạn có chắc muốn sửa không",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        if (user.full_name == "" || user.phone == "") {
                            Alert.alert("Vui lòng điền đầy đủ thông tin!!");
                            return;
                        } else {
                            //console.log(user);
                            fetch(url + '/user/update/' + id, {
                                method: 'PUT',
                                headers: { 'content-type': 'application/json' },
                                body: JSON.stringify(user),
                            }).then(res => res).then(data => {
                                if (data.error) {
                                    console.log(data.error);
                                } else {
                                    Alert.alert("Add user is success!");
                                    return navigation.goBack();
                                }
                            })
                            return;
                        }
                    }
                }
            ]
        );
    };
    //get all role
    const getAllRole = async () => {
        await fetch(url + '/role/all')
            .then((res) => res.json())
            .then((res) => {
                var data = res;
                setListRole(data);
            })
            .catch((err) => console.log("ERR", err));
    };
    useEffect(() => { getUser(); getAllRole() }, []);
    //get id role from list role
    const getIdRole = listRole.map((item, index) => {
        return <Text key={item._id}>{item.role_name}</Text>;
    });
    //setup DrorpDownInput
    const DrorpDownInput = ({ label, icon, ...props }) => {
        return (
            <View>
                <UULabel>
                    {label}
                </UULabel>
                <SelectDropdown
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                    dropdownIconPosition={'right'}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={darkLight} size={18} />;
                    }}
                    data={getIdRole}
                    onSelect={(selectedItem, index) => {
                        user.role = selectedItem.key;
                    }}
                    defaultButtonText={
                        listRole.map((role, index) => {
                            if (role._id == user.role) {
                                return <Text>{role.role_name}</Text>;
                            }
                        })
                    }
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }} />
            </View>
        )
    };


    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br1.png')} ></OLPic>
                <FormAdd style={styles.TouchableImage} >
                    <ScrollView>
                        <PageTitle>Update User</PageTitle>
                        <Formik
                            initialValues={{ user_name: '', password: '', full_name: '', phone: '', role: '' }}
                            onSubmit={(values) => { console.log(values); }} >
                            {({ handleChange, handleBlur, HandleSubmit, values }) => (
                                <StyledFormArea>
                                    <MyTextInput
                                        autofocus
                                        label="Tên Tài Khoản"
                                        placeholder={user.user_name}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        placeholderTextColor={blur}
                                        onChangeText={(text) => setUser({ ...user, user_name: text })}
                                        onBlur={handleBlur('user_name')}
                                        value={user.user_name} >
                                    </MyTextInput>
                                    <MyTextInput
                                        label="Mật Khẩu (nếu có)"
                                        placeholder="* * * * * *"
                                        placeholderTextColor={blur}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={true}>
                                    </MyTextInput>
                                    <MyTextInput
                                        autofocus
                                        label="Họ và Tên"
                                        placeholder={user.full_name}
                                        placeholderTextColor={blur}
                                        onChangeText={(text) => setUser({ ...user, full_name: text })}
                                        onBlur={handleBlur('full_name')}
                                        value={user.full_name} >
                                    </MyTextInput>
                                    <MyTextInput
                                        label="Số Điện Thoại"
                                        placeholder={user.phone}
                                        placeholderTextColor={blur}
                                        keyboardType='numeric'
                                        onChangeText={(text) => setUser({ ...user, phone: text })}
                                        onBlur={handleBlur('phone')}
                                        value={user.phone} >
                                    </MyTextInput>
                                    <DrorpDownInput
                                        label="Permission"
                                        value={user.role}>
                                    </DrorpDownInput>
                                    <Line />
                                    <StyledButton onPress={() => {
                                        console.log(values.password);
                                        console.log(values.password != user.password);
                                        console.log(values.password != "");
                                        if (values.password != "" && values.password != user.password) {
                                            user.password = values.password;
                                            console.log("ok");
                                            return updateUser(user);

                                        } else {
                                            console.log("ok la");
                                            return updateUser(user);
                                        };
                                        console.log(user);
                                        HandleSubmit
                                    }} >
                                        <ButtonText>
                                            Submit
                                        </ButtonText>
                                    </StyledButton>
                                </StyledFormArea>
                            )}
                        </Formik>
                    </ScrollView>
                </FormAdd>
            </InnerContainer>
        </StyledContainer>
    );
}
//setup MyTextInput
const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View >
            <UULabel>
                {label}
            </UULabel>
            <UUInput {...props} />
        </View>
    )
};
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

export default UserUpdatding;



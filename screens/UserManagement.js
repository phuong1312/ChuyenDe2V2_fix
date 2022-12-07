import React, { useState, useEffect } from "react";
import {
  StyledFormHome,
  StyledDrinkTouchable,
  StyledDrinkTouchableImage,
  SDTText,
  SDTPrice,
  StyledDrinkTouchableAdd,
  SDTBtnText,
  StyledDrinkTouchableDelete,
  StyledDrinkTouchableEdit,
} from "../components/styles";
import { useIsFocused } from '@react-navigation/native';
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
//Colors
const UserManagement = ({navigation }) => {
  //Values
  const url = "http://192.168.96.119:3000/api";
  const [listUser, setListUser] = useState([]);
  const isFocused = useIsFocused();
  const [check, setCheck] = useState(false);
  useEffect(() => { getListUser(); }, [check, isFocused]);
  //get list user
  const getListUser = async () => {
    await fetch(url + '/user/all')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res;
        setListUser(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //delete user by id
  const createTwoButtonAlert = (id) =>
    Alert.alert(
      "Thông báo",
      "bạn có chắc muốn xóa không",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteUser(id) }
      ]
    );
  const deleteUser = (id) => {
    const url = url + '/user/delete/' + id;
    fetch(url, {
      method: 'DELETE',
    }).then(res => res).then(data => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setCheck(!check);
        console.log(check);
      }
    })
  };


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StyledFormHome>
            {listUser.map((item) => {
              return (
                <StyledDrinkTouchable style={styles.TouchableImage}>
                  <StyledDrinkTouchableImage
                    resizeMode="cover"
                    source={require("../assets/image/u3.png")}
                  ></StyledDrinkTouchableImage>
                  <SDTText> {item.user_name}</SDTText>
                  <SDTPrice>{item.role.role_name}</SDTPrice>
                  <StyledDrinkTouchableAdd
                    onPress={() => navigation.navigate("UserAdding")}
                  >
                    <SDTBtnText>Add</SDTBtnText>
                  </StyledDrinkTouchableAdd>
                  <StyledDrinkTouchableDelete
                    onPress={() => {
                      createTwoButtonAlert(item._id);
                    }}
                  >
                    <SDTBtnText>Delete</SDTBtnText>
                  </StyledDrinkTouchableDelete>
                  <StyledDrinkTouchableEdit
                    onPress={() => navigation.navigate("UserUpdating", { id: item._id })}
                  >
                    <SDTBtnText>Edit</SDTBtnText>
                  </StyledDrinkTouchableEdit>
                </StyledDrinkTouchable>
              );
            })}
            {/* {users} */}
          </StyledFormHome>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  twocl: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  TouchableImage: {
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3,
    },
  },
});

export default UserManagement;

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
  StyledButton,
  ButtonText,
  StyledDrinkTouchableEdit,
  Colors,
} from "../components/styles";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import TabBtn from "./TabBtn";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "../components/Button";

const { brand, darkLight, black, primary } = Colors;

//Colors
const DrinkManagement = ({ navigation, route }) => {
  // lấy tất cả đồ uống
  const urlDrinkAll = "http://192.168.1.144:3000/api/drink/list";
  const urlCategory = "http://192.168.1.144:3000/api/category/list";
  const urlDrinkByCategory = "http://192.168.1.144:3000/api/drink/category/";
  const urlSortOnPrice = "http://192.168.1.144:3000/api/drink/";
  const urls = "http://192.168.1.144:3000/api/drink/delete/";

  const [listDrink, setListDrink] = useState([]);

  //check load dữ liệu tất cả đồ uống
  const [check, setCheck] = useState(false);

  //load dữ liệu tất cả category
  const [listCategory, setListCategory] = useState([]);

  // check load category
  const [type, setType] = useState("");

  // check load sort On Price
  const [typeSort, setTypeSort] = useState("");

  // đồ uống theo danh mục
  const [listDrinkByCategory, setListDrinkByCategory] = useState([]);
  const [listSortDrinkOnPrice, setListSortDrinkOnPrice] = useState([]);

  // chạy dữ liệu 1 lần đầu
  useEffect(() => {
    getListCategory();
  }, []);

  // chạy dữ liệu khi có sự thay đổi
  useEffect(() => {
    getListDrink();
  }, [check]);

  useEffect(() => {
    if (type) {
      getListDrinkByCategory();
    }
  }, [type]);

  useEffect(() => {
    if (typeSort) {
      getListDrinkOnPrice();
    }
  }, [typeSort]);

  // lấy các danh mục ra
  const getListCategory = async () => {
    await fetch(urlCategory)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        var data = res.data;
        setListCategory(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // lấy các đồ uống thuộc 1 danh mục
  const getListDrinkByCategory = async () => {
    await fetch(urlDrinkByCategory + "" + type)
      .then((res) => res.json())
      .then((res) => {
        // console.log("drink by category: ");
        // console.log(res.data);
        var data = res.data;
        setListDrinkByCategory(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // lấy tất cả đồ uống
  const getListDrink = async () => {
    await fetch(urlDrinkAll)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res.data;
        //setCheck(check + 1);
        setListDrink(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //.

  const createTwoButtonAlert = (id) =>
    Alert.alert("Thông báo", "bạn có chắc muốn xóa không", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteDrink(id) },
    ]);

  const deleteDrink = async (id) => {
    // console.log(urls+""+id)
    await fetch(urls + "" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCheck(!check);
        // var data = res.data;
        //  setList(res);
      })
      .catch((err) => console.log("ERR", err));
  };

  //
  const getListDrinkOnPrice = async () => {
    await fetch(urlSortOnPrice + "" + typeSort)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res.data;
        //setCheck(check + 1);
        setListSortDrinkOnPrice(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // xuất danh mục xuống dropdown
  const dataCategory = listCategory.map((item) => {
    return (
      <Text key={item._id} onPress={() => setType(item._id)}>
        {item.name}
      </Text>
    );
  });

  // xuất các đồ uống thuộc 1 danh mục xuống giao diện
  const listDrinkCategory = listDrinkByCategory.map((item) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={{ uri: `${item.image}` }}
        ></StyledDrinkTouchableImage>
        <SDTText>{item.name}</SDTText>
        <SDTPrice>{item.price}$</SDTPrice>
        <StyledDrinkTouchableAdd
          onPress={() => {
            navigation.navigate("DrinkAdding");
          }}
        >
          <SDTBtnText>Add</SDTBtnText>
        </StyledDrinkTouchableAdd>
        <StyledDrinkTouchableDelete
          onPress={() => {
            setCheck(!check), Alert.alert("Deleted");
          }}
        >
          <SDTBtnText>Delete</SDTBtnText>
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() => {
            navigation.navigate("DrinkUpdating", {
              id: item._id,
            }),
              setCheck(!check);
          }}
        >
          <SDTBtnText>Edit</SDTBtnText>
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  });

  const drinkOnPrice = listSortDrinkOnPrice.map((item) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={{ uri: `${item.image}` }}
        ></StyledDrinkTouchableImage>
        <SDTText>{item.name}</SDTText>
        <SDTPrice>{item.price}$</SDTPrice>
        <StyledDrinkTouchableAdd
          onPress={() => {
            navigation.navigate("DrinkAdding");
          }}
        >
          <SDTBtnText>Add</SDTBtnText>
        </StyledDrinkTouchableAdd>
        <StyledDrinkTouchableDelete
          onPress={() => {
            setCheck(!check), Alert.alert("Deleted");
          }}
        >
          <SDTBtnText>Delete</SDTBtnText>
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() => {
            navigation.navigate("DrinkUpdating", {
              id: item._id,
            }),
              setCheck(!check);
          }}
        >
          <SDTBtnText>Edit</SDTBtnText>
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  });

  // console.log("category: ");
  // console.log(listCategory);

  const DrorpDownInput = ({ label, icon, ...props }) => {
    return (
      <View>
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={"right"}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={darkLight}
                size={18}
              />
            );
          }}
          data={dataCategory}
          onSelect={(item, index) => {
            // setCategoryId(item.key);
            setType(item.key);
            console.log("key: " + item.key);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
    );
  };

  // xuất các đồ uống xuống giao diện
  const drinks = listDrink.map((item, index) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={{ uri: `${item.image}` }}
        ></StyledDrinkTouchableImage>
        <SDTText>{item.name}</SDTText>
        <SDTPrice>{item.price}$</SDTPrice>
        <StyledDrinkTouchableAdd
          onPress={() => {
            navigation.navigate("DrinkAdding");
          }}
        >
          <SDTBtnText>Add</SDTBtnText>
        </StyledDrinkTouchableAdd>
        <StyledDrinkTouchableDelete
          onPress={() => createTwoButtonAlert(item._id)}
        >
          <SDTBtnText>Delete</SDTBtnText>
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() => {
            navigation.navigate("DrinkUpdating", {
              id: item._id,
            }),
              setCheck(!check);
          }}
        >
          <SDTBtnText>Edit</SDTBtnText>
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  });

  // check xem có đang chọn 1 danh mục nào hay không ?
  const checkType = () => {
    console.log(typeSort);
    if (type) {
      return listDrinkCategory;
    } else if (typeSort) {
      return drinkOnPrice;
    } else {
      return drinks;
    }
  };

  const checkKey = () => {
    setType(null), setCheck(!check), setTypeSort(null);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StyledFormHome>
            <StyledButton
              onPress={() => {
                checkKey();
              }}
            >
              <ButtonText>All</ButtonText>
            </StyledButton>
            <StyledButton
              onPress={() => {
                setType(null), setTypeSort("sortIncrease");
              }}
            >
              <ButtonText>Tăng</ButtonText>
            </StyledButton>
            <StyledButton
              onPress={() => {
                setType(null), setTypeSort("sortDecrease");
              }}
            >
              <ButtonText>Giảm</ButtonText>
            </StyledButton>
            <DrorpDownInput label="Category"></DrorpDownInput>
            {checkType()}
          </StyledFormHome>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: primary ,
  },
  twocl: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  TouchableImage: {
    elevation: 10,
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

export default DrinkManagement;

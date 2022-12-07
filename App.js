import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Notification from "./screens/Notification";
import DateRegist from "./screens/DateRegist";
import DrinkChoosing from "./screens/DrinkChoosing";
import TableChoosing from "./screens/TableChoosing";
import Total from "./screens/Total";
import DrinkManagement from "./screens/DrinkManagement";
import TableManagement from "./screens/TableManagement";
import UserManagement from "./screens/UserManagement";
import DrinkAdding from "./screens/DrinkAdding";
import DrinkUpdating from "./screens/DrinkUpdating";
import RegistDateManagement from "./screens/RegistDateManagement";
import SalaryManagement from "./screens/SalaryManagement";
import UserAdding from "./screens/UserAdding";
import UserUpdating from "./screens/UserUpdating";
import Test from "./screens/Test";
import TestTab from "./screens/TestTab";
import TabBtn from "./screens/TabBtn";
import AdminManagement from "./screens/AdminManagement";

import DateTurnOver from "./screens/DateTurnOver";
import MonthTurnOver from "./screens/MonthTurnOver";
import TotailExpenditure from "./screens/TotailExpenditure";

import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-web";
import TotalInput from "./screens/TotailInput";

const Stack = createNativeStackNavigator();
const Table = [
  { name: "Table" },
  { name: "Table" },
  { name: "Table" },
  { name: "Table" },
  { name: "Table" },
  { name: "Table" },
  { name: "Table" },
];
const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView>
        <FlatList
        numColumns={2}
        data={Table}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=>(<TableChoosing table={item}/>)}>

        </FlatList>
      </SafeAreaView> */}
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "transparent",
          },
          animationEnabled: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="DateRegist" component={DateRegist} />
        <Stack.Screen name="DrinkChoosing" component={DrinkChoosing} />
        <Stack.Screen name="TableChoosing" component={TableChoosing} />
        <Stack.Screen name="Total" component={Total} />
        <Stack.Screen name="DrinkManagement" component={DrinkManagement} />
        <Stack.Screen name="TableManagement" component={TableManagement} />
        <Stack.Screen name="UserManagement" component={UserManagement} />
        <Stack.Screen name="DrinkAdding" component={DrinkAdding} />
        <Stack.Screen name="DrinkUpdating" component={DrinkUpdating} />
        <Stack.Screen name="UserAdding" component={UserAdding} />
        <Stack.Screen name="UserUpdating" component={UserUpdating} />
        <Stack.Screen
          name="RegistDateManagement"
          component={RegistDateManagement}
        />
        <Stack.Screen name="SalaryManagement" component={SalaryManagement} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="TestTab" component={TestTab} />
        <Stack.Screen name="TabBtn" component={TabBtn} />
        <Stack.Screen name="DateTurnOver" component={DateTurnOver} />
        <Stack.Screen name="MonthTurnOver" component={MonthTurnOver} />
        <Stack.Screen name="TotailExpenditure" component={TotailExpenditure} />
        <Stack.Screen name="AdminManagement" component={AdminManagement} />
        <Stack.Screen name="TotalInput" component={TotalInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

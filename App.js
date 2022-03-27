import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import Parties from "./Screens/Parties/Parties";
import AddParties from "./Screens/Parties/AddParties";
import PartiesDetail from "./Screens/Parties/PartiesDetail";
import Home from "./Screens/Home";

import Products from "./Screens/Products/Products";
import AddProducts from "./Screens/Products/AddProducts";
import ProductsDetail from "./Screens/Products/ProductsDetail";

import AddOrders from "./Screens/Orders/AddOrders";
import OrdersList from "./Screens/Orders/OrdersList";
import OrdersDetail from "./Screens/Orders/OrdersDetail";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />

      <Stack.Screen
        name="AddParties"
        component={AddParties}
        options={{ title: "Add Parties" }}
      />
      <Stack.Screen
        name="PartiesDetail"
        component={PartiesDetail}
        options={{ title: "Parties Detail" }}
      />
      <Stack.Screen
        name="Parties"
        component={Parties}
        options={{ title: "Parties List" }}
      />
      <Stack.Screen
        name="AddProducts"
        component={AddProducts}
        options={{ title: "Add Products" }}
      />
      <Stack.Screen
        name="ProductsDetail"
        component={ProductsDetail}
        options={{ title: "Products Detail" }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ title: "Products List" }}
      />

      <Stack.Screen
        name="AddOrders"
        component={AddOrders}
        options={{ title: "Add Orders" }}
      />
      <Stack.Screen
        name="OrdersList"
        component={OrdersList}
        options={{ title: "Orders List" }}
      />
      <Stack.Screen
        name="OrdersDetail"
        component={OrdersDetail}
        options={{ title: "Orders Detail" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

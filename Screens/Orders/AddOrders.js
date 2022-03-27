// screens/AddUserScreen.js
import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-datepicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase from "../../Database/firebaseDatabase";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function AddOrders({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    title: {},
    datePickerStyle: {
      height: 48,
      width: 350,
      backgroundColor: "white",
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 0,
      paddingRight: 10,
      paddingLeft: 16,
      borderRadius: 5,
    },
    logo: {
      flex: 1,
      height: 120,
      width: 90,
      alignSelf: "center",
      margin: 30,
    },
    input: {
      height: 48,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: "white",
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
    },
    button: {
      backgroundColor: "#788eec",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonTitle: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    footerView: {
      flex: 1,
      alignItems: "center",
      marginTop: 20,
    },
    totalView: {
      width: 300,
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
    },
    footerText: {
      fontSize: 16,
      color: "#2e2e2d",
    },
    footerLink: {
      color: "#788eec",
      fontWeight: "bold",
      fontSize: 16,
    },
    footerLink2: {
      color: "#788eec",
      fontWeight: "bold",
      fontSize: 16,
      alignItems: "flex-end",
    },
  });

  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");

  const [open, setOpen] = useState(false);
  const [openPrd, setOpenPrd] = useState(false);

  const [valuePrd, setValuePrd] = useState(null);
  const [valuePrt, setValuePrt] = useState(null);

  const [productKey, setProductKey] = useState();
  const [partyKey, setPartyKey] = useState();
  const [partiesArray, setPartiesArray] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  const partiesData = partiesArray.map((obj) => ({
    label: obj.Name,
    value: obj.PartyID,
  }));

  const productsData = productsArray.map((obj) => ({
    label: obj.Name + " - " + obj.Potency,
    value: obj.ProductID,
  }));

  const [itemsPrd, setItemsPrd] = useState([productsData]);
  //   useState([
  //     { label: "ApplePrd", value: "applePrd" },
  //     { label: "BananaPrd", value: "bananaPrd" },
  //   ]);
  const [date, setDate] = useState(new Date(Date.now()));

  const [itemsPrt, setItemsPrt] = useState([partiesData]);
  const [itemsPRDName, setItemsPrdName] = useState([]);
  //   useState([
  //     { label: "ApplePrt", value: "applePrt" },
  //     { label: "BananaPrt", value: "bananaPrt" },
  //   ]);
  const fireBaseRefParties = firebase.firestore().collection("Parties");
  const fireBaseRefProducts = firebase.firestore().collection("Products");

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(amount * quantity);
  }, [amount, quantity]);

  useEffect(() => {
    fireBaseRefParties.onSnapshot(
      (querySnapshot) => {
        const newEntities = [];
        querySnapshot.forEach((res) => {
          const { Name, City, Address, ContactNumber, PartyID } = res.data();
          setPartyKey(res.id);
          newEntities.push({
            key: res.id,
            Name,
            ContactNumber,
            City,
            Address,
            PartyID,
          });
        });

        setPartiesArray(newEntities);
        const partiesData = newEntities.map((obj) => ({
          label: obj.Name,
          value: obj.PartyID,
        }));
        setItemsPrt(partiesData);
        // setIsLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  useEffect(() => {
    fireBaseRefProducts.onSnapshot(
      (querySnapshot) => {
        const newEntities2 = [];
        querySnapshot.forEach((res) => {
          const { Name, Potency, BatchNumber, ProductID } = res.data();
          setProductKey(res.id);

          newEntities2.push({
            key: res.id,
            Name,
            Potency,
            BatchNumber,
            ProductID,
          });
        });

        setProductsArray(newEntities2);
        const productsDataName = newEntities2.map((obj) => ({
          label: obj.Name,
          value: obj.ProductID,
          Potency: obj.Potency,
          BatchNumber: obj.BatchNumber,
        }));
        const productsData = newEntities2.map((obj) => ({
          label: obj.Name + " - " + obj.Potency,
          value: obj.ProductID,
        }));
        setItemsPrd(productsData);
        setItemsPrdName(productsDataName);
        // setIsLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  //   const onFooterLinkPress = () => {
  //     // navigation.navigate("Parties");
  //     console.log(valuePrd, valuePrt, date);
  //   };
  const selectedProduct = itemsPRDName.filter((obj) => obj.value === valuePrd);
  const selectedParty = itemsPrt.filter((obj) => obj.value === valuePrt);
  const onFooterLinkPress = () => {
    // navigation.navigate("Parties");
    console.log(
      valuePrd,
      valuePrt,
      date,
      selectedProduct,
      selectedParty,
      selectedParty[0].label
    );
  };
  const onRegisterPress = () => {
    if (!quantity || !amount || !valuePrd || !valuePrt || !date) {
      alert("Field Must Not Empty.");
      return;
    }

    const U_id = Date.now();
    const usersRef = firebase.firestore().collection("Invoice");
    usersRef
      .add({
        InvoiceID: U_id,
        ProductID: valuePrd,
        PartyID: valuePrt,
        ProductName: selectedProduct[0].label,
        PartyName: selectedParty[0].label,
        Potency: selectedProduct[0].Potency,
        BatchNumber: selectedProduct[0].BatchNumber,
        Quantity: quantity,
        Amount: amount,
        AddedOn: date,
        TotalPrice: totalPrice,
      })
      .then(() => {
        setQuantity(""), setAmount(""), navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, paddingTop: 65 }}>
        <Text style={{ paddingTop: 20, paddingBottom: 10 }}>Product:</Text>
        <DropDownPicker
          key={1}
          open={openPrd}
          value={valuePrd}
          items={itemsPrd}
          setOpen={setOpenPrd}
          dropDownDirection="AUTO"
          style={{ width: "100%", paddingHorizontal: 30 }}
          dropDownStyle={{
            backgroundColor: "#fafafa",
            width: "100%",
            paddingHorizontal: 30,
          }}
          setValue={setValuePrd}
          setItems={setItemsPrd}
          zIndex={3000}
          zIndexInverse={1000}
        />
        <Text style={{ paddingTop: 20, paddingBottom: 10 }}>Party:</Text>
        <DropDownPicker
          key={2}
          open={open}
          value={valuePrt}
          items={itemsPrt}
          setOpen={setOpen}
          dropDownDirection="AUTO"
          style={{ width: "100%", paddingHorizontal: 30 }}
          dropDownStyle={{
            backgroundColor: "#fafafa",
            width: "100%",
            paddingHorizontal: 30,
          }}
          setValue={setValuePrt}
          setItems={setItemsPrt}
          zIndex={1000}
          zIndexInverse={3000}
        />
        <View>
          <Text style={{ paddingTop: 20, paddingBottom: 5 }}>Date :</Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            //   minDate="01-01-1900"
            //   maxDate="01-01-2000"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                right: -5,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                borderColor: "gray",
                alignItems: "flex-start",
                borderWidth: 0,
                borderBottomWidth: 1,
                marginBottom: 10,
                marginTop: 10,
              },
              placeholderText: {
                fontSize: 17,
                color: "gray",
              },
              dateText: {
                fontSize: 17,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
      </View>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        {/* <Image style={styles.logo} source={require("../../assets/icon.png")} /> */}
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Cost"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setAmount(text)}
          value={amount}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Quantity"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setQuantity(text)}
          value={quantity}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <View style={styles.totalView}>
          <Text style={styles.footerText}>
            <Text style={styles.footerLink}>Total: {totalPrice}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Add Order</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Orders List
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

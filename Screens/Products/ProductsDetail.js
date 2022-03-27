// screens/AddUserScreen.js
import React, { useState, useEffect } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase from "../../Database/firebaseDatabase";
import { StyleSheet } from "react-native";

export default function ProductsDetail({ navigation, route }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    title: {},
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
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
    button2: {
      backgroundColor: "red",
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
    footerText: {
      fontSize: 16,
      color: "#2e2e2d",
    },
    footerLink: {
      color: "#788eec",
      fontWeight: "bold",
      fontSize: 16,
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState();

  const [name, setName] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [potency, setPotency] = useState("");
  const fireBaseRef = firebase
    .firestore()
    .collection("Products")
    .doc(route.params?.productkey);
  useEffect(() => {
    fireBaseRef.get().then((res) => {
      if (res.exists) {
        const partyData = res.data();
        setKey(res.id);
        setName(partyData.Name);
        setBatchNumber(partyData.BatchNumber);
        setPotency(partyData.Potency);
        setIsLoading(false);
      } else {
        console.log("Document does not exist!");
      }
    });
  }, []);

  const deleteUser = () => {
    fireBaseRef.delete().then((res) => {
      console.log("Item removed from database", res);
      navigation.navigate("Products");
    });
  };
  const openTwoButtonAlert = () => {
    Alert.alert(
      "Delete User",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteUser() },
        {
          text: "No",
          onPress: () => console.log("No item was removed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const onUpdatePress = () => {
    if (!name || !batchNumber || !potency) {
      alert("Field Must Not Empty.");
      return;
    }

    setIsLoading(true);
    const usersRef = firebase.firestore().collection("Products").doc(key);
    usersRef
      .set({
        Name: name,
        BatchNumber: batchNumber,
        Potency: potency,
      })
      .then(() => {
        setName(""),
          setBatchNumber(""),
          setPotency(""),
          setIsLoading(false),
          navigation.navigate("Products");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setName(text)}
            value={name}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="BatchNumber"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setBatchNumber(text)}
            value={batchNumber}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            // secureTextEntry
            placeholder="Potency"
            onChangeText={(text) => setPotency(text)}
            value={potency}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => onUpdatePress()}
          >
            <Text style={styles.buttonTitle}>Update Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => openTwoButtonAlert()}
          >
            <Text style={styles.buttonTitle}>Delete Product</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      )}
    </View>
  );
}

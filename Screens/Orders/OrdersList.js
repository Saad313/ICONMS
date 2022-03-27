// screens/UserScreen.js
import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "../../Database/firebaseDatabase";
import { Text } from "react-native";

const OrdersList = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ordersArray, setOrdersArray] = useState([]);

  const [orderKey, setOrderKey] = useState();

  const onFooterLinkPress = () => {
    // navigation.navigate('AddParties')
    navigation.navigate({
      name: "AddOrders",
    });
  };

  const fireBaseRef = firebase.firestore().collection("Invoice");

  //   const fireBaseRefParties = firebase.firestore().collection("Parties");

  //   const fireBaseRefProducts = firebase.firestore().collection("Products");

  useEffect(() => {
    fireBaseRef.onSnapshot(
      (querySnapshot) => {
        const newEntities = [];
        querySnapshot.forEach((res) => {
          const {
            InvoiceID,
            ProductID,
            PartyID,
            ProductName,
            PartyName,
            Quantity,
            Potency,
            BatchNumber,
            Amount,
            AddedOn,
            TotalPrice,
          } = res.data();

          newEntities.push({
            key: res.id,
            InvoiceID,
            ProductID,
            PartyID,
            ProductName,
            PartyName,
            Potency,
            BatchNumber,
            Quantity,
            Amount,
            AddedOn,
            TotalPrice,
          });
        });

        setOrdersArray(newEntities);
        setOrderKey(newEntities[0].key);
        console.log(newEntities[0].key, "2");
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      {isLoading && (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
          <Text>Loading...</Text>
        </View>
      )}
      {!isLoading && ordersArray.length > 0 ? (
        <View style={styles.container}>
          <ScrollView>
            {ordersArray.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  bottomDivider
                  onPress={() => {
                    navigation.navigate({
                      name: "OrdersDetail",
                      params: { orderKeyN: item.key },
                      merge: true,
                    });
                  }}
                >
                  <ListItem.Content>
                    <ListItem.Title>
                      Party Name: {item.PartyName}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      Product Name: {item.ProductName}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      BatchNumber: {item.BatchNumber}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      Potency: {item.Potency}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      Total: {item.TotalPrice}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron color="black" />
                </ListItem>
              );
            })}
          </ScrollView>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                Add Orders
              </Text>
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              {" "}
              No Orders Added{" "}
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                Add Orders
              </Text>
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  footerView: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
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
export default OrdersList;

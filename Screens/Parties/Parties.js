// screens/UserScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../../Database/firebaseDatabase';
import { Text } from 'react-native'


const Parties = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [partiesArray, setPartiesArray] = useState([]);
  const onFooterLinkPress = () => {
    // navigation.navigate('AddParties')
    navigation.navigate({
      name: 'AddParties',
      params: { fromParties: true },
      merge: true,
    })
  }

  const fireBaseRef = firebase.firestore().collection('Parties');

  useEffect(() => {
    fireBaseRef
      .onSnapshot(
        querySnapshot => {
          const newEntities = []
          querySnapshot.forEach(res => {
            const { Name, City, Address, ContactNumber, PartyID } = res.data()

            newEntities.push({
              key: res.id,
              Name,
              ContactNumber,
              City,
              Address,
              PartyID
            })
          });

          setPartiesArray(newEntities);
          setIsLoading(false);
        },
        error => {
          console.log(error)
        }
      )
  }, [])


  return (
    <>
      {isLoading && <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
        <Text>Loading...</Text>
      </View>
      }
      {!isLoading && partiesArray.length > 0 && partiesArray[0].Name!== ""?
      <View style={styles.container}>
        <ScrollView >
          {
            partiesArray.map((item, i) => {

              return (
                <ListItem
                  key={i}
                  bottomDivider
                  onPress={() => {
                    navigation.navigate({
                      name: 'PartiesDetail',
                      params: { partykey: item.key },
                      merge: true,
                    })
                  }}>
                  <ListItem.Content>
                    <ListItem.Title>{item.Name}</ListItem.Title>
                    <ListItem.Subtitle>{item.City}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron
                    color="black"
                  />
                </ListItem>
              );
            })
          }
        </ScrollView>
        <View style={styles.footerView}>
        <Text style={styles.footerText}><Text onPress={onFooterLinkPress} style={styles.footerLink}>AddParties</Text></Text>
        </View>
        </View>
        :
        <View style={styles.container}>
          <View style={styles.footerView}>

          <Text style={styles.footerText}> No Parties Added<Text onPress={onFooterLinkPress} style={styles.footerLink}>Add Parties</Text></Text>
          </View>
        </View>
      }
      
      
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerView: {

    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
    
    
},
footerText: {
    fontSize: 16,
    color: '#2e2e2d'
},
footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
}
})
export default Parties;
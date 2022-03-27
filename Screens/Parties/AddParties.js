// screens/AddUserScreen.js
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  firebase  from '../../Database/firebaseDatabase'
import { StyleSheet } from 'react-native';

export default function AddParties({navigation}) {

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
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


    const [name, setName] =  useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [city, setCity] = useState("");

    const onFooterLinkPress = () => {
        navigation.navigate('Parties')
    }

    const onRegisterPress = () => {
        if (!name || !address || !contactNumber || !city) {
            alert("Field Must Not Empty.")
            return
        }
    
        const U_id = Date.now();
        const usersRef = firebase.firestore().collection('Parties');
        usersRef
          .add({
            "PartyID":U_id,
            "Name": name,
            "ContactNumber":contactNumber,
            "Address":address,
            "City": city
          })
          .then(() => {
              setName(""),
              setCity(""),
              setAddress(""),
              setContactNumber(""),
              navigation.navigate('Parties')
          })
          .catch((error) => {
              alert(error);
          });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/icon.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Address'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    // secureTextEntry
                    placeholder='City'
                    onChangeText={(text) => setCity(text)}
                    value={city}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    // secureTextEntry
                    placeholder='Contact Number'
                    onChangeText={(text) => setContactNumber(text)}
                    value={contactNumber}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Add Party</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}><Text onPress={onFooterLinkPress} style={styles.footerLink}>Parties List</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}


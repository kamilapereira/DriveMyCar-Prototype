//create a simple register page

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";



const RegisterPage = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [transmission, setTransmission] = useState("");
    const [color, setColor] = useState("");
    const [licensePlate, setLicensePlate] = useState("");

    const addUser = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userRef = doc(database, "users", user.uid);
            await setDoc(userRef, {
                displayName: name,
                lastName: lastName,
                email: email,
                uid: user.uid,
                phoneNumber: phoneNumber,
                address: address,
                licenseType: licenseType,
                car: {
                    brand: brand,
                    model: model,
                    year: year,
                    transmission: transmission,
                    color: color,
                    licensePlate: licensePlate
                }

            });
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    return (
        <ScrollView style={{ width: "100%", maxHeight: "100%" }}>

        <View style={styles.container}>

            <Image style={styles.logo} source={require('../images/logoDriveMyCar.jpg')} />


                <TextInput
                    style={styles.inputField}
                    placeholder="Enter name"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter Last name"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={false}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    showSoftInputOnFocus={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    required
                />

                <TextInput style={styles.inputField}
                    placeholder="Enter your Age"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"    
                    value={age}
                    onChangeText={(text) => setAge(text)}
                />

                <TextInput style={styles.inputField}
                    placeholder="Enter your Address"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />

                <TextInput style={styles.inputField}
                    placeholder="Enter your Phone Number"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />

                <TextInput
                    style={styles.inputField}
                    placeholder="Enter Car Brand"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={brand}
                    onChangeText={(text) => setBrand(text)}
                    required
                />

                <TextInput style={styles.inputField}
                    placeholder="Enter Car Model"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={model}
                    onChangeText={(text) => setModel(text)}
                    required
                />
                <TextInput style={styles.inputField}
                    placeholder="Enter Car Year"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={year}
                    onChangeText={(text) => setYear(text)}
                    required
                />
                <TextInput style={styles.inputField}
                    placeholder="Enter Car Transmission"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={transmission}
                    onChangeText={(text) => setTransmission(text)}
                />
                <TextInput style={styles.inputField}
                    placeholder="Enter Car Color"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={color}
                    onChangeText={(text) => setColor(text)}
                />
                <TextInput style={styles.inputField}
                    placeholder="Enter Car License Plate"
                    autoCapitalize="none"
                    autoCorrect={true}
                    textContentType="name"
                    value={licensePlate}
                    onChangeText={(text) => setLicensePlate(text)}
                />


                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <TouchableOpacity
                            style={styles.bodyTopButton}
                            onPress={() => addUser()}
                        >
                            <Text style={styles.bodyTopButtonText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.bodyTopButton}
                            onPress={() => navigation.navigate('LoginPage')}
                        >
                            <Text style={styles.bodyTopButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>

        </View>
    </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        margin: 'auto',
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 50,
    },
    inputField: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '80%',
        height: 40,
        paddingStart: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
    },
    searchBarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyTop: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    bodyTopButton: {
        backgroundColor: '#000',
        width: '40%',
        margin: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    bodyTopButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default RegisterPage;
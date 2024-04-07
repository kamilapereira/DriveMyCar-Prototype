import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const LoginPage = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== "") {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              console.log("Login success");
              navigation.navigate('Home');
            })
            .catch((err) => Alert.alert("Email or password invalid"));
        }
      };

    return (

        <View style={styles.container}>

            <Image style={styles.logo} source={require('../images/logoDriveMyCar.jpg')} />

            <TextInput
                style={styles.inputField}
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="#AEAEAE"
            />

            <TextInput
                style={styles.inputField}
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor="#AEAEAE"
            />


            <View style={styles.body}>
                <View style={styles.bodyTop}>
                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={onHandleLogin}
                    >
                        <Text style={styles.bodyTopButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={() => navigation.navigate('RegisterPage')}
                    >
                        <Text style={styles.bodyTopButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 'auto',
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        marginTop: 80,
        alignItems: 'center',
    },

    logo: {
        width: 200,
        height: 200,
        marginVertical: '15%',
        borderRadius: 50,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputField: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '80%',
        height: 45,
        paddingStart: 15,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000',
    },

    body: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    bodyTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55,
        marginBottom: '15%',
        margin: '8%',

    },
    bodyTopButton: {
        flex: 1,
        backgroundColor: '#000',
        width: '40%',
        margin: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,

    },
    bodyTopButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },

});

export default LoginPage;

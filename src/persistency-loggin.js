//create a code where the user persists in the app after logging in even after the app is closed.

// Path: DriveMyCarApp/src/persistency-loggin.js
import React, { useEffect, useState } from 'react';
import { auth } from "../config/firebase";

const usePersistedUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    return user;
};

export default usePersistedUser;

// Path: DriveMyCarApp/src/login-page.js
// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config/firebase";
// import usePersistedUser from "./persistency-loggin";

// const LoginPage = () => {
//     const navigation = useNavigation();
//     const user = usePersistedUser();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const onHandleLogin = () => {
//         if (email !== "" && password !== "") {
//             signInWithEmailAndPassword(auth, email, password)
//                 .then(() => {
//                     console.log("Login success");
//                     navigation.navigate('Home');
//                 })
//                 .catch((err) => Alert.alert("Email or password invalid"));
//         }
//     };

//     if (user) {
//         navigation.navigate('Home');
//     }

//     return (
//         <View style={styles.container}>
//             <Image style={styles.logo} source={require('../images/logoDriveMyCar.jpg')} />
//             <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter email"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 textContentType="emailAddress"
//                 autoFocus={true}
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//                 placeholderTextColor="#AEAEAE"
//             />
//             <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter password"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 secureTextEntry={true}
//                 textContentType="password"
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//                 placeholderTextColor="#AEAEAE"
//             />
//             <TouchableOpacity style={styles.loginButton} onPress={onHandleLogin}>
//                 <Text style={styles.loginButtonText}>Login</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     logo: {
//         width: 200,
//         height: 200,
//         marginBottom: 20,
//     },
//     inputField: {
//         width: '80%',
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#AEAEAE',
//         borderRadius: 5,
//         paddingLeft: 10,
//         marginBottom: 20,
//     },
//     loginButton: {
//         width: '80%',
//         height: 50,
//         backgroundColor: '#FFD428',
//         borderRadius: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     loginButtonText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default LoginPage;

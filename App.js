import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/login-page';
import HomePage from './src/home-page';
import SearchPage from './src/search-page';
import RegisterPage from './src/register-page';
import ProfilePage from './src/profile-page';

import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    async function getData() {
        const data = await AsyncStorage.getItem('isLoggedIn');
        console.log(data, 'at app.jsx');
        setIsLoggedIn(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const Stack = createStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator >

                <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const Stack = createStackNavigator();

//         const App = () => {

//         return (
//             <NavigationContainer >
//                 <Stack.Navigator >

//                     <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
//                     <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
//                     <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: false }} />
//                     <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
//                     <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />

//                 </Stack.Navigator>
//             </NavigationContainer>
//         );
//     }
    

    export default App;
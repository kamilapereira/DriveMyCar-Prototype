import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/login-page';
import HomePage from './src/home-page';
import SearchPage from './src/search-page';
import RegisterPage from './src/register-page';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                
                <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}} />
                <Stack.Screen name="Search" component={SearchPage} options={{headerShown: false}} />
                <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown: false}} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
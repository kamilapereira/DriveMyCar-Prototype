import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from "../config/firebase";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilePage = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    // Storing data
const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };
  
  // Retrieving data
  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved successfully:', value);
        return value;
      } else {
        console.log('No data found for key:', key);
        return null;
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };  

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.profilePicContainer}>
                            <Image style={styles.profilePic} source={require('../images/profileAvatar.jpg')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Feather name="settings" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyTop}>
                    <Text style={styles.bodyTopText}>Profile Information</Text>
                    <Text style={styles.bodyTopText}>Name: {user ? user.displayName : ''}</Text>
                    <Text style={styles.bodyTopText}>Last Name: {user ? user.lastName : ''}</Text>
                    <Text style={styles.bodyTopText}>Email: {user ? user.email : ''}</Text>
                    <Text style={styles.bodyTopText}>Phone number: {user ? user.phoneNumber : ''}</Text>

                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={() => navigation.navigate('EditProfile')}
                    >
                        <Text style={styles.bodyTopButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D8D8',
    },
    headerLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        height: 200,
        marginHorizontal: 50,
        marginTop: 30,
    },
    headerText: {
        fontSize: 20,
        marginLeft: 10,
    },
    headerRight: {
        flexDirection: 'row',
    },
    body: {
        padding: 20,
    },
    bodyTop: {
        marginBottom: 20,
    },
    bodyTopText: {
        fontSize: 20,
        marginBottom: 10,
    },
    bodyTopButton: {
        backgroundColor: '#FFD428',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    bodyTopButtonText: {
        fontSize: 20,
    },
    profilePicContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
    },
    profilePic: {
        flex: 1,
        width: 250,
        height: 250,
        borderRadius: 125, // Half of the width and height to make it a circle
    },
});

export default ProfilePage;

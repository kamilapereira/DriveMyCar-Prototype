import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { auth, database } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AreaModal from './area-modal';


const HomePage = () => {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState(""); // State to store displayName
    const [isAreaModalVisible, setAreaModalVisible] = useState(false); // State to manage modal visibility
    const [selectedArea, setSelectedArea] = useState(''); // State to store selected area

    useEffect(() => {
        // Function to fetch current user's displayName
        const fetchDisplayName = async () => {
            try {
                const currentUser = auth.currentUser;
                if (!currentUser) {
                    // Handle the case where the user is not authenticated
                    Alert.alert("User not authenticated");
                    return;
                }

                const userId = currentUser.uid;
                const userRef = doc(database, `users/${userId}`);
                const docSnapshot = await getDoc(userRef);

                if (docSnapshot.exists()) {
                    setDisplayName(docSnapshot.data().displayName);
                } else {
                    console.log("User profile not found");
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                // Handle error if needed
            }
        };

        fetchDisplayName(); // Fetch displayName when the component mounts

        // Check user login status using AsyncStorage
        const checkUserLoggedIn = async () => {
            try {
                const user = await AsyncStorage.getItem('user');
                if (user) {
                    const userData = JSON.parse(user);
                    setDisplayName(userData.displayName);
                } else {
                    console.log("It's not possible to get the user data.");
                }
            } catch (error) {
                console.error('Error checking user login status:', error);
            }
        };

        checkUserLoggedIn();
    }, []);

    // Function to open the area modal
    const openAreaModal = () => {
        setAreaModalVisible(true);
    };

    // Function to close the area modal
    const closeAreaModal = () => {
        setAreaModalVisible(false);
    };

    // Function to handle selecting an area
    const handleSelectArea = (area) => {
        setSelectedArea(area);
        closeAreaModal();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
                        <Text style={styles.headerText}>Hi, {displayName}!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
                        <Feather name="settings" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.searchBar} onPress={openAreaModal}>
                    <Text style={styles.searchBarText}>{selectedArea || 'Select area'} </Text>
                    <FontAwesome name="angle-down" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyTop}>
                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={() => navigation.navigate('Search')}
                    >
                        <MaterialIcons name="local-taxi" size={24} color="black" />
                        <Text style={styles.bodyTopButtonText}>Book a ride</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={() => navigation.navigate('SearchPage')}
                    >
                        <Entypo name="location-pin" size={24} color="black" />
                        <Text style={styles.bodyTopButtonText}>Book a ride</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            <AreaModal
                isVisible={isAreaModalVisible}
                onClose={closeAreaModal}
                onSelectArea={handleSelectArea}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    searchBarText: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
    },
    bodyTopButton: {
        backgroundColor: '#e0e0e0',
        padding: 20,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    bodyTopButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    bodyBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    bodyBottomButton: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    bodyBottomButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomePage;

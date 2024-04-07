import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { auth, database } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const ProfilePage = () => {
    const navigation = useNavigation();
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        // Function to fetch user profile information
        const fetchUserProfile = async () => {
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
                    setUserProfile(docSnapshot.data());
                } else {
                    console.log("User profile not found");
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                // Handle error if needed
            }
        };

        fetchUserProfile(); // Fetch user profile when the component mounts

    }, []);

    const signOut = () => {
        auth.signOut()
            .then(() => {
                console.log("User signed out successfully");
                // Redirect to login page or do other necessary actions after sign out
                navigation.navigate('LoginPage'); // Navigate to LoginPage after signing out
            })
            .catch((error) => {
                console.error("Error signing out:", error);
                // Handle error if needed
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={require('../images/profileAvatar.jpg')} />
            </View>
            <Text style={styles.heading}>Your Profile</Text>
            {userProfile && (
                <View style={styles.profileInfo}>
                    <Text style={styles.profileItem}>Name: {userProfile.displayName}</Text>
                    <Text style={styles.profileItem}>Email: {userProfile.email}</Text>
                    <Text style={styles.profileItem}>Phone Number: {userProfile.phoneNumber}</Text>
                    {/* Add more profile information fields as needed */}
                </View>
            )}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePassword')}>
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    profileInfo: {
        marginBottom: 20,
        alignItems: "center",
    },
    profileItem: {
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#222222",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default ProfilePage;

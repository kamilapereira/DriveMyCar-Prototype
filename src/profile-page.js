import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
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

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Profile</Text>
            {userProfile && (
                <View style={styles.profileInfo}>
                    <Text>Name: {userProfile.displayName}</Text>
                    <Text>Email: {userProfile.email}</Text>
                    <Text>Phone Number: {userProfile.phoneNumber}</Text>
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

const signOut = () => {
    auth.signOut()
        .then(() => {
            console.log("User signed out successfully");
            // Redirect to login page or do other necessary actions after sign out
        })
        .catch((error) => {
            console.error("Error signing out:", error);
            // Handle error if needed
        });
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    profileInfo: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007bff",
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

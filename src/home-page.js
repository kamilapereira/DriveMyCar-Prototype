import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { auth, database } from "../config/firebase";

const HomePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

                    </TouchableOpacity>
                    <Text style={styles.headerText}>Hi, !</Text>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Feather name="settings" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchBar}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput
                    style={styles.searchBarText}
                    placeholder="Search"
                    placeholderTextColor="#000"
                />
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
        backgroundColor: '#f2f2f2',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    searchBarText: {
        fontSize: 18,
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
        backgroundColor: '#f2f2f2',
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
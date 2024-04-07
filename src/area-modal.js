import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { database } from '../config/firebase';


const AreaModal = ({ isVisible, onClose, onSelectArea }) => {

    const [selectedArea, setSelectedArea] = useState(null); // State to store the selected area
    const [availableDrivers, setAvailableDrivers] = useState([]); // State to store available drivers


    // Fetch available drivers for the selected area
    useEffect(() => {
        if (selectedArea) {
            // Reference the 'drivers' node in your Firebase Realtime Database
            const driversRef = database.ref('drivers').child(selectedArea);
            
            // Fetch available drivers for the selected area
            driversRef.once('value', (snapshot) => {
                const drivers = snapshot.val();
                if (drivers) {
                    setAvailableDrivers(Object.values(drivers));
                } else {
                    setAvailableDrivers([]);
                }
            }, (error) => {
                console.error('Error fetching available drivers:', error);
            });
        }
    }, [selectedArea]);


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {availableDrivers.map((driver, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.areaButton} 
                                onPress={() => {} /* Handle driver selection */}
                            >
                                <Text style={styles.areaButtonText}>{driver.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '70%', // Set a maximum height to make it scrollable
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaButton: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#363535',
        width: '100%',
        alignItems: 'center',
    },
    areaButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default AreaModal;

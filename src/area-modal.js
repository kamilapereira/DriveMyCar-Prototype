import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AreaModal = ({ isVisible, onClose, onSelectArea }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={{ marginBottom: 5 }}></Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>

                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D1')}>
                            <Text style={styles.areaButtonText}>D1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D2')}>
                            <Text style={styles.areaButtonText}>D2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D3')}>
                            <Text style={styles.areaButtonText}>D3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D4')}>
                            <Text style={styles.areaButtonText}>D4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D5')}>
                            <Text style={styles.areaButtonText}>D5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D6')}>
                            <Text style={styles.areaButtonText}>D6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D7')}>
                            <Text style={styles.areaButtonText}>D7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D8')}>
                            <Text style={styles.areaButtonText}>D8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D9')}>
                            <Text style={styles.areaButtonText}>D9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D10')}>
                            <Text style={styles.areaButtonText}>D10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D11')}>
                            <Text style={styles.areaButtonText}>D11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D12')}>
                            <Text style={styles.areaButtonText}>D12</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D13')}>
                            <Text style={styles.areaButtonText}>D13</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D14')}>
                            <Text style={styles.areaButtonText}>D14</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D15')}>
                            <Text style={styles.areaButtonText}>D15</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D16')}>
                            <Text style={styles.areaButtonText}>D16</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D17')}>
                            <Text style={styles.areaButtonText}>D17</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D18')}>
                            <Text style={styles.areaButtonText}>D18</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D19')}>
                            <Text style={styles.areaButtonText}>D19</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D20')}>
                            <Text style={styles.areaButtonText}>D20</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D21')}>
                            <Text style={styles.areaButtonText}>D21</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.areaButton} onPress={() => onSelectArea('D22')}>
                            <Text style={styles.areaButtonText}>D22</Text>
                        </TouchableOpacity>
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

import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../utils/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomSheetHeader = ({ onClose, title }) => {

    return (
        <View>
            <View style={styles.titleContainer}>
                <TouchableOpacity style={styles.icon} onPress={onClose}>
                    <Ionicons name='chevron-up-outline' />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.separator} />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        display: 'flex',
        justifyContent: 'center',
        flex: 0,
        flexGrow: 0
    },
    title: {
        color: Colors.primaryColor,
        fontSize: 18,
        marginLeft: 10,
        textAlign: 'center',
        flex: 0,
        flexGrow: 1
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 5,
        height: 40,
        marginBottom: 10
    },
    separator: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'black',
        marginBottom: 10
    }

})

export default BottomSheetHeader
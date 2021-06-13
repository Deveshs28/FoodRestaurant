import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/Colors'

const QuantityView = ({ qty, qtyType, onIncrement, onDecrement }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={onDecrement}>
                <Ionicons name='remove-outline' />
            </TouchableOpacity>
            <Text style={styles.title}>{qty} {qtyType}</Text>
            <TouchableOpacity style={styles.icon} onPress={onIncrement}>
                <Ionicons name='add-outline' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10
    },
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
    }
})

export default QuantityView
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomCard from './CustomCard';
import Colors from '../utils/Colors';

const SlotItem = ({ time, selected }) => {
    return (

        <CustomCard style={styles.container}>
            {selected
                ? <View style={styles.selected}>
                    <Text style={styles.titleSelected}>{time}</Text>
                </View>
                : <View style={styles.unSelected}>
                    <Text style={styles.titleUnSelected}>{time}</Text>
                </View>}

        </CustomCard>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10
    },
    selected: {
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    unSelected: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    titleSelected: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'OpenSans-Bold'
    },
    titleUnSelected: {
        fontSize: 20,
        color: Colors.primaryColor,
        fontFamily: 'OpenSans-Bold'
    }
})

export default SlotItem
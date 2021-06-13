import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StepsItem = ({ step, index }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.indexLabel}>{index + 1}</Text>
            <Text style={styles.stepLabel}>{step}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 0,
        paddingHorizontal: 16,
        paddingVertical: 18,
        backgroundColor: 'white'
    },
    stepLabel: {
        fontSize: 16,
        marginLeft: 5,
        color: 'black',
        fontFamily: 'OpenSans-Bold'
    },
    indexLabel: {
        fontSize: 16,
        color: 'gray',
        fontFamily: 'OpenSans-Bold'
    }
})

export default StepsItem
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const RadioButton = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.outerCircle}>
                {props.selected
                    ? <View style={styles.innerCircle} />
                    : null}
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.title}>{props.label}</Text>
                <Text style={styles.qty}>{props.qty} {props.qtyType}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 5
    },
    outerCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'orange'
    },
    title: {
        color: 'orange',
        fontSize: 18
    },
    qty: {
        color: 'gray',
        fontSize: 16,
        marginTop: 5
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 15
    }
})

export default RadioButton
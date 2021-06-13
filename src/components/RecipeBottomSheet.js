import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import Colors from '../utils/Colors'
import RadioButton from '../components/RadioButton'
import BottomSheetHeader from './BottomSheetHeader'

const RecipeBottomSheet = ({ ingredients, onClose }) => {

    return (
        <View style={styles.container}>
            <BottomSheetHeader onClose={onClose} title='Ingredients' />
            {
                ingredients.map(item => (
                    <RadioButton key={item.id} selected={item.selected} label={item.title} qty={item.qty} qtyType={item.qtyType} />
                ))
            }
            <View style={styles.buttonContainer}>
                <Button color={Colors.primaryColor} title='Add to Reminder' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    listStyle: {
        marginBottom: 10
    },
    buttonContainer: {
        marginTop: 20
    }

})

export default RecipeBottomSheet
import React, { useState } from 'react'
import { View, StyleSheet, Button, Image, Text } from 'react-native'
import Colors from '../utils/Colors'
import BottomSheetHeader from './BottomSheetHeader'
import DropDownPicker from 'react-native-dropdown-picker';
import SlotItem from './SlotItem'
import QuantityView from './QuantityView'

const RestaurantBottomSheet = ({ element: { title, address, image, openDays, timings }, onClose }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [qty, setQty] = useState(1);

    const incrementHandler = () => {
        setQty(qty + 1)
    }

    const decrementHandler = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    return (
        <View style={styles.container}>
            <BottomSheetHeader onClose={onClose} title='Reservation' />
            <View style={styles.header}>
                <View style={styles.addressContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.address}>{address}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </View>
            <View style={styles.separator} />
            <DropDownPicker
                open={open}
                value={value}
                items={openDays}
                setOpen={setOpen}
                setValue={setValue}
                style={styles.dropDown}
            />
            <View style={styles.slots}>
                {
                    timings.map(item => (
                        <SlotItem key={item.id} time={item.time} selected={item.selected} />
                    ))
                }
            </View>
            <QuantityView qty={qty} qtyType='people' onIncrement={() => incrementHandler()} onDecrement={() => decrementHandler()} />
            <View style={styles.buttonContainer}>
                <Button color={Colors.primaryColor} title='Pay' />
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
    buttonContainer: {
        marginTop: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10
    },
    addressContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '65%',
        marginRight: 10
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    address: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5
    },
    imageContainer: {
        width: '32%',
        height: 70,
        resizeMode: "cover",
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    separator: {
        backgroundColor: 'gray',
        height: 0.7,
        marginVertical: 5
    },
    dropDown: {
        marginVertical: 10,
        zIndex: 1
    },
    slots: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row'
    }

})

export default RestaurantBottomSheet
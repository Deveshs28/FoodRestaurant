import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import CustomCard from './CustomCard';

const CategoryItem = ({ onSelect, image, title, people, time }) => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (

        <CustomCard style={styles.category}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={onSelect}>
                    <ImageBackground style={styles.imageContainer} source={{ uri: image }}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <View style={styles.subContainer}>
                                <Text style={styles.subheading}>{people} people </Text>
                                <Text style={styles.subheading}>{time} minutes</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableCmp>
            </View>
        </CustomCard>
    )
}

const styles = StyleSheet.create({
    category: {
        height: 160,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        resizeMode: "cover",
        overflow: 'hidden'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        height: '100%'
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'OpenSans-Bold'
    },
    subheading: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'OpenSans-Bold'
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 7,
        width: '100%',
        height: '100%'
    }
})

export default CategoryItem
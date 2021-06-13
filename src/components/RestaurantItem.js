import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import CustomCard from './CustomCard';

const RestaurantItem = ({ element: { image, type, title, reviewCount, rating }, onSelect }) => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    let ratingBarView = [];
    for (let i = 1; i <= 5; i++) {
        ratingBarView.push(
            i <= rating
                ? <Image style={styles.ratingBar} source={require('../images/star_filled.png')} />
                : <Image style={styles.ratingBar} source={require('../images/star_corner.png')} />
        )
    }

    return (

        <CustomCard style={styles.restaurant}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={onSelect}>
                    <View style={styles.rowContainer}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subheading}>{type}</Text>
                            <View style={styles.ratingContainer}>
                                {ratingBarView}
                                <Text style={styles.review}>{reviewCount} reviews</Text>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </CustomCard>
    )
}

const styles = StyleSheet.create({
    restaurant: {
        height: 100,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 15
    },
    imageContainer: {
        width: '30%',
        height: 68,
        resizeMode: "cover",
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingRight: 15,
        width: '70%'
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 5,
        fontFamily: 'OpenSans-Bold'
    },
    subheading: {
        fontSize: 13,
        color: 'gray',
        fontFamily: 'OpenSans-Bold'
    },
    review: {
        fontSize: 13,
        color: 'gray',
        marginHorizontal: 10,
        fontFamily: 'OpenSans-Bold'
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 7
    },
    rowContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 4
    },
    ratingBar: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    }
})

export default RestaurantItem
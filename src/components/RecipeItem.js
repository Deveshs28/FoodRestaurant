import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import CustomCard from './CustomCard';

const RecipeItem = ({ onSelect, image, subHeading, title }) => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (

        <CustomCard style={styles.recipe}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={onSelect}>
                    <ImageBackground style={styles.imageContainer} source={{ uri: image }}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.subheading}>{subHeading.toUpperCase()}</Text>
                            <Text style={styles.title}>{title.toUpperCase()}</Text>
                        </View>
                    </ImageBackground>
                </TouchableCmp>
            </View>
        </CustomCard>
    )
}

const styles = StyleSheet.create({
    recipe: {
        height: 280,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        resizeMode: "cover",
        overflow: 'hidden'
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingTop: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 5,
        color: 'white',
        fontFamily: 'OpenSans-Bold'
    },
    subheading: {
        fontSize: 13,
        marginTop: 5,
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

export default RecipeItem
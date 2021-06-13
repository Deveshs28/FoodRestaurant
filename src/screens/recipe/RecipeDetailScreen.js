import React, { useRef } from 'react'
import { View, Button, StyleSheet, FlatList, Image, Dimensions, Text, Platform } from 'react-native'
import StepsItem from '../../components/StepsItem'
import { RecipeSubCategory } from '../../data/RecipeData'
import RBSheet from 'react-native-raw-bottom-sheet'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import RecipeBottomSheet from '../../components/RecipeBottomSheet'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors'

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 250;

const RecipeDetailScreen = props => {
    const itemId = props.route.params.itemId
    const item = RecipeSubCategory.find(item => item.id === itemId)
    const refRBSheet = useRef();
    const navTitleView = useRef(null)

    return (
        <ImageHeaderScrollView
            maxHeight={MAX_HEIGHT}
            minHeight={MIN_HEIGHT}
            maxOverlayOpacity={0.6}
            minOverlayOpacity={0.3}
            renderHeader={() => (
                <Image source={{ uri: item.image }} style={styles.image} />
            )}
            renderForeground={() => (
                <View style={styles.titleContainer}>
                    <Text style={styles.toolbarTitle}>{item.title}</Text>
                </View>
            )}
            renderFixedForeground={() => (
                <Animatable.View style={styles.fixedTitleView} ref={navTitleView}>
                    <Text style={styles.toolbarTitleSmall}>{item.title}</Text>
                </Animatable.View>
            )}
        >
            <TriggeringView style={styles.section}
                onHide={() => navTitleView.current.fadeInUp(10)}
                onDisplay={() => navTitleView.current.fadeOut(10)}
            >
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionSubContainer}>
                        <Ionicons name='body-outline' />
                        <Text style={styles.indicator}>{item.people} people</Text>
                    </View>
                    <View style={styles.sectionSubContainer}>
                        <Ionicons name='time-outline' />
                        <Text style={styles.indicator}>{item.time} minute</Text>
                    </View>
                </View>
            </TriggeringView>
            <View>
                <View style={styles.container}>
                    <Button
                        color='#73c700'
                        onPress={() => {
                            refRBSheet.current.open()
                        }}
                        title='See Ingredients' />
                    <FlatList
                        style={styles.spacing}
                        ItemSeparatorComponent={
                            (() => (
                                <View
                                    style={styles.itemSeparator}
                                />
                            ))
                        }
                        data={item.process}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index, separators }) => (
                            <StepsItem
                                key={item.id}
                                step={item}
                                index={index}
                            />
                        )}
                    />
                </View>
                <RBSheet
                    ref={refRBSheet}
                    animationType='slide'
                    closeOnDragDown={false}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        container: {
                            backgroundColor: 'white',
                            height: 500
                        }
                    }}>
                    <RecipeBottomSheet
                        ingredients={item.ingredients}
                        onClose={() => {
                            refRBSheet.current.close()
                        }} />
                </RBSheet>
            </View>
        </ImageHeaderScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#f3f3f3'
    },
    spacing: {
        marginTop: 20
    },
    itemSeparator: {
        height: .7,
        width: "100%",
        backgroundColor: "gray",
    },
    bottomSheet: {
        backgroundColor: 'white',
        opacity: 0.7,
        height: 300
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 5
    },
    toolbarTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    toolbarTitleSmall: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 18,
    },
    fixedTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    sectionSubContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicator: {
        fontSize: 14,
        color: Colors.primaryColor
    }
})

export default RecipeDetailScreen
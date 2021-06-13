import React, { useRef } from 'react'
import { View, StyleSheet, Button, Text, Platform, Dimensions, Image } from 'react-native'
import { RestaurantListData } from '../../data/RestaurantData'
import CustomCard from '../../components/CustomCard'
import RBSheet from 'react-native-raw-bottom-sheet'
import RestaurantBottomSheet from '../../components/RestaurantBottomSheet'
import MapView, { Marker } from 'react-native-maps';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors'

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 250;

const RestaurantDetail = props => {
    const itemId = props.route.params.itemId
    const item = RestaurantListData.find(item => item.id === itemId)
    const refRBSheet = useRef();
    const navTitleView = useRef()

    let ratingBarView = [];
    for (let i = 1; i <= 5; i++) {
        ratingBarView.push(
            i <= item.rating
                ? <Image style={styles.ratingBar} source={require('../../images/star_filled.png')} />
                : <Image style={styles.ratingBar} source={require('../../images/star_corner.png')} />
        )
    }

    const initialRegion = {
        latitude: item.lat,
        longitude: item.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

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
                < Animatable.View style={styles.fixedTitleView} ref={navTitleView}>
                    <Text style={styles.toolbarTitleSmall}>{item.title}</Text>
                </Animatable.View>
            )
            }
        >
            <TriggeringView style={styles.section}
                onHide={() => navTitleView.current.fadeInUp(100)}
                onDisplay={() => navTitleView.current.fadeOut(100)}
            >
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionSubContainer}>
                        <Ionicons name='cash-outline' />
                        <Text style={styles.indicator}>$$</Text>
                    </View>
                    <View style={styles.sectionSubContainer}>
                        <View style={styles.ratingContainer}>
                            {ratingBarView}
                        </View>
                        <Text style={styles.indicator}>{item.reviewCount} reviews</Text>
                    </View>
                    <View style={styles.sectionSubContainer}>
                        <Ionicons name='time-outline' />
                        <Text style={styles.indicator}>18:00 22:00</Text>
                    </View>
                </View>
            </TriggeringView>
            <View>
                <View style={styles.container}>
                    <MapView
                        region={initialRegion}
                        onRegionChange={() => { }}
                        style={styles.map}
                        scrollEnabled={true}
                        zoomEnabled={true}
                        minZoomLevel={12}
                    >
                        <Marker
                            coordinate={{ latitude: item.lat, longitude: item.lng }}
                        />
                    </MapView>
                    <Button
                        color='#73c700'
                        onPress={() => {
                            refRBSheet.current.open()
                        }}
                        title='Make Reservation' />
                    <CustomCard style={styles.detailContainer}>
                        <Text style={styles.detailText}>{item.detail}</Text>
                    </CustomCard>
                    <CustomCard style={styles.detailContainer}>
                        <Text style={styles.labelText}>Lorem Ipsum</Text>
                        <Text style={styles.detailText}>{item.detail}</Text>
                    </CustomCard>
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
                            height: 450
                        }
                    }}>
                    <RestaurantBottomSheet
                        element={item}
                        onClose={() => {
                            refRBSheet.current.close()
                        }} />
                </RBSheet>
            </View>
        </ImageHeaderScrollView >

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: '#f3f3f3'
    },
    detailContainer: {
        marginVertical: 15,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    detailText: {
        fontSize: 16,
        color: 'black'
    },
    labelText: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        marginBottom: 15
    },
    bottomSheet: {
        backgroundColor: 'white',
        opacity: 0.7,
        height: 300
    },
    map: {
        width: '100%',
        height: 200
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
    },
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingBar: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    }
})

export default RestaurantDetail
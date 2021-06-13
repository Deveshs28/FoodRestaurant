import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { RestaurantListData } from '../../data/RestaurantData'
import RestaurantItem from '../../components/RestaurantItem'
import MapView, { Marker } from 'react-native-maps';

const RestaurantList = props => {
    const selectItemHandler = (id, title) => {
        props.navigation.navigate('RestaurantDetail', {
            itemId: id,
            title
        })
    }

    const initialRegion = {
        latitude: 40.7484,
        longitude: -73.9857,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    props.navigation.setOptions({
        title: 'Restuarant'
    });

    return (
        <View>
            <MapView
                region={initialRegion}
                onRegionChange={() => { }}
                style={styles.map}
                scrollEnabled={true}
                zoomEnabled={true}
                minZoomLevel={12}
            >
                {RestaurantListData.map((item, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: item.lat, longitude: item.lng }}
                    />
                ))}
            </MapView>
            <FlatList
                data={RestaurantListData}
                keyExtractor={item => item.id}
                renderItem={itemData => <RestaurantItem
                    key={itemData.item.id}
                    element={itemData.item}
                    onSelect={() => selectItemHandler(itemData.item.id, itemData.item.title)} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 150,
    }
})

export default RestaurantList


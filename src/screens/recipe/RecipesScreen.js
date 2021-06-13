import React from 'react'
import { View, FlatList } from 'react-native'
import { RecipeList } from '../../data/RecipeData'
import RecipeItem from '../../components/RecipeItem'

const RecipeScreen = props => {

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('FoodCategory', {
            itemId: id,
            title
        })
    }

    props.navigation.setOptions({
        title: 'Recipes'
    });

    return (
        <FlatList
            data={RecipeList}
            keyExtractor={item => item.id}
            renderItem={itemData => <RecipeItem
                key={itemData.item.id}
                image={itemData.item.image}
                subHeading={itemData.item.subTitle}
                title={itemData.item.title}
                onSelect={() => selectItemHandler(itemData.item.id, itemData.item.title)} />}
        />
    )
}

export default RecipeScreen
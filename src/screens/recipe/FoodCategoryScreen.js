import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import CategoryItem from '../../components/CategoryItem'
import { RecipeSubCategory } from '../../data/RecipeData'

const FoodCategoryScreen = props => {
    const itemId = props.route.params.itemId
    const title = props.route.params.title
    const item = RecipeSubCategory.filter(element => element.recipeId === itemId)
    const selectItemHandler = (id) => {
        props.navigation.navigate('RecipeDetail', {
            itemId: id
        })
    }

    props.navigation.setOptions({
        title: title
    });

    return (
        <FlatList
            data={item}
            keyExtractor={item => item.id}
            renderItem={itemData => <CategoryItem
                key={itemData.item.id}
                image={itemData.item.image}
                people={itemData.item.people}
                time={itemData.item.time}
                title={itemData.item.title}
                onSelect={() => selectItemHandler(itemData.item.id)} />}
        />
    )
}

export default FoodCategoryScreen
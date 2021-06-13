import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeScreen from '../screens/recipe/RecipesScreen';
import FoodCategoryScreen from '../screens/recipe/FoodCategoryScreen';
import RecipeDetailScreen from '../screens/recipe/RecipeDetailScreen';
import RestaurantList from '../screens/restaurant/RestaurantListScreen';
import RestaurantDetail from '../screens/restaurant/RestaurantDetailScreen';
import { Platform } from 'react-native';
import Colors from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RecipeStack = createStackNavigator();
const RestaurantStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'OpenSans-Regular'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

function RecipeStackNavigation() {
    return (
        <RecipeStack.Navigator screenOptions={defaultStackNavOptions}>
            <RecipeStack.Screen name="Recipes" component={RecipeScreen} />
            <RecipeStack.Screen name="FoodCategory" component={FoodCategoryScreen} />
            <RecipeStack.Screen name="RecipeDetail" component={RecipeDetailScreen}
                options={({ route }) => ({
                    headerBackTitle: false,
                    headerTitle: '',
                    headerTransparent: true,
                    headerTintColor: '#fff'
                })}
            />
        </RecipeStack.Navigator>
    )
}

function RestaurantStackNavigation() {
    return (
        <RestaurantStack.Navigator screenOptions={defaultStackNavOptions}>
            <RestaurantStack.Screen name="RestaurantList" component={RestaurantList} />
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetail}
                options={({ route }) => ({
                    headerBackTitle: false,
                    headerTitle: '',
                    headerTransparent: true,
                    headerTintColor: '#fff'
                })}
            />
        </RestaurantStack.Navigator>
    )
}

export default ScreenNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Recipe') {
                            iconName = 'browsers-outline'
                        } else {
                            iconName = 'ellipsis-horizontal-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Recipe" component={RecipeStackNavigation} />
                <Tab.Screen name="Restaurant" component={RestaurantStackNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
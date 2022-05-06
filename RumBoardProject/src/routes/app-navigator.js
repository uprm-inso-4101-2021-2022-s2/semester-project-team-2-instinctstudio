import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from 'react-native';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Home: HomeScreen,

    About:AboutScreen,
};


const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);


export default AppNavigator;
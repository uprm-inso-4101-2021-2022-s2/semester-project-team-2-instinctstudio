import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Navigator from './src/routes';


export default class App extends React.Component {
    render() {
       return (<Navigator />);
    }
}
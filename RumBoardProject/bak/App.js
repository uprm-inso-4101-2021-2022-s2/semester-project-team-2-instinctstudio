import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import App from './src'
//import React from 'react';

import Navigator from './src/routes';

function Apps() {
  return (<Navigator />);
}

export default class App extends React.Component {
    render() {
        return <Apps />;
    }
}
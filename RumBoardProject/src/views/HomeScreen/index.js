import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
// formik
import{Formik} from 'formik';


//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtontText,
    Colors
} from './../../components/styles.js';

const HomeScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Home</Text>
  </SafeAreaView>
);

export default HomeScreen;


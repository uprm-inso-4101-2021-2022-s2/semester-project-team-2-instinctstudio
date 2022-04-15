import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
// formik

import {Colors} from './../../styles/colors.js';
const { primary, secondary, tertiary, darkLight, brand, green, red, blue } = Colors;
import {SideBar} from "./../MenuScreen";
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
    ButtonText,

} from './../../components/styles.js';
import{
    HomeText,
    StyledContainerHome,

} from './../../components/home_style.js';

const HomeScreen = ({navigation}) => (
    <StyledContainerHome>
      <SafeAreaView>
        <SideBar/>
      </SafeAreaView>
    </StyledContainerHome>
);

export default HomeScreen;


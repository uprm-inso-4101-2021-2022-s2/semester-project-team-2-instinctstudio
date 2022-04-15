import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
// formik


const { primary, secondary, tertiary, darkLight, brand, green, red, blue } = Colors;

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
    Colors,
    HomeText,
} from './../../components/styles.js';

const HomeScreen = ({navigation}) => (
    <StyledContainer>
      <SafeAreaView>
      <HomeText>

      </HomeText>
      </SafeAreaView>
    </StyledContainer>
);

export default HomeScreen;


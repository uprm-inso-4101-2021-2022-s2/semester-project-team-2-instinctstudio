import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Colors} from './../styles/colors.js';

export const HomeText = styled.Text`
    font-size: 30px;
    text-align: justify;
    font-weight: bold;
    color: ${Colors.green};
    padding: 10px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${Colors.green};
    padding: 10px;
`;

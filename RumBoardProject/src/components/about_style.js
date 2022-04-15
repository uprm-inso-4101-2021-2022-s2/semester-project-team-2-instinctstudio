import {Colors} from './../styles/colors.js';
import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const { primary, secondary, tertiary, darkLight, brand, green, red, blue } = Colors;


export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${Colors.green};
    padding: 10px;
`;
export const AboutText = styled.Text`
    font-size: 30px;
    text-align: justify;
    font-weight: bold;
    color: ${Colors.green};
    padding: 10px;
`;
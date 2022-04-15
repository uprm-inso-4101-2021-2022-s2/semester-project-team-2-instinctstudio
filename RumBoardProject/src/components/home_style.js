import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {Colors} from './../styles/colors.js';
import { Dimensions } from 'react-native';


const { primary, secondary, tertiary, darkLight, brand, green, red, blue } = Colors;

const StatusBarHeight = Constants.statusBarHeight;


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

export const StyledContainerHome = styled.View`
    flex: 1;
    padding: 0px 0px 0px 0px;

    background-color: ${tertiary};
`;

export const barBackground = StyleSheet.create({
  container: {
    top: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: (Dimensions.get('window').height),
    flex: 4,
    backgroundColor: "black",
    margin: 0,

  },
});

export const ScreenView = styled.View`

    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: showMenu ? 15 : 0,
    // Transforming View...
    transform: [
      { scale: scaleValue },
      { translateX: offsetValue }
    ]

`;
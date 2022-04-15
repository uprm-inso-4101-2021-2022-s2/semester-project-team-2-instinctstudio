import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import * from './../styles/colors.js';


const StatusBarHeight = Constants.statusBarHeight;



const { primary, secondary, tertiary, darkLight, brand, green, red, blue } = Colors;

//const primary = Colors.primary, secondary = Colors.secondary, tertiary = Colors.tertiary, darkLight = Colors.darkLight, brand = Colors.brand, green = Colors.green, red = Colors.red;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 20}px;
    background-color: ${tertiary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`;

export const PageLogo = styled.Image`

    width:90%;
    height: 30%;

`;
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${green};
    padding: 10px;
`;

export const AboutText_Green_Big = styled.Text`
    font-size: 30px;
    text-align: justify;
    font-weight: bold;
    color: ${green};
    padding: 10px;
`;
export const SubTitle = styled.Text`
    font-size = 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${primary};

`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${green};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${green};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const StyledTextUnderlined = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${red};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

`;
export const GuestButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

`;
export const ButtonText = styled.Text`
    color: ${tertiary};
    font-size: 16px;
`;
export const BlueButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${blue};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

`;
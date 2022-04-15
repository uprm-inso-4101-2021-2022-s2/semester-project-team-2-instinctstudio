import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Alert, TouchableHighlight} from 'react-native';
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
    StyledTextUnderlined,
    ButtonText,
    Colors,
    GuestButton
} from './../../components/styles.js';

const {primary, darkLight, secondary,tertiary , green } = Colors;

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style = "dark"/>
            <InnerContainer>

                <PageLogo resizeMode = "cover" source = {require('./../../assets/logo(2).png')} />

                <PageTitle>RUM BOARD</PageTitle>
                <SubTitle>Account Login</SubTitle>


                <Formik
                    initialValues = {{email: '', password: ''}}
                    onSubmit = {(values) => {
                        console.log(values + "hhe");
                    }}

                >
                    {({handleChange, handleBlur, handleSubmit, values }) => (
                    <StyledFormArea>

                        <MyTextInput
                         label = "Email Address"
                         icon = "mail"
                         placeholder = "example@upr.edu"
                         placeholderTextColor = {tertiary}
                         onChangeText = {handleChange('email')}
                         onBlur = {handleBlur('email')}
                         value = {values.email}
                         KeyboardType = "email-address"
                    />

                      <MyTextInput
                         label = "Password"
                         icon = "lock"
                         placeholder = "* * * * * * * * *"
                         placeholderTextColor = {tertiary}
                         onChangeText = {handleChange('password')}
                         onBlur = {handleBlur('password')}
                         value = {values.password}
                         secureTextEntry={hidePassword}
                         isPassword={true}
                         hidePassword = {hidePassword}
                         setHidePassword = {setHidePassword}
                    />
                    <StyledButton
                     onPress={() => Alert.alert('Login')}>
                        <ButtonText>
                            Login
                        </ButtonText>
                    </StyledButton>

                    <StyledTextUnderlined
                       onPress={() =>  navigation.navigate('SignUp')}>
                        <ButtonText>
                           Sign up
                        </ButtonText>
                    </StyledTextUnderlined>

                    <GuestButton
                    activeOpacity={0.8}
                    onPress={() => Alert.alert('Login as Guest')}>
                        <ButtonText>
                        Login as Guest
                        </ButtonText>
                    </GuestButton>

                    </StyledFormArea>)}


                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (<View>
            <LeftIcon>
            <Octicons name = {icon} size = {30} color = {tertiary} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
            // Code for the password, see and not see the password
            <RightIcon onPress ={() => setHidePassword(!hidePassword)}>
                <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'}    size = {30} color = {green} />
            </RightIcon>)}
    </View>)

};





export default Login;
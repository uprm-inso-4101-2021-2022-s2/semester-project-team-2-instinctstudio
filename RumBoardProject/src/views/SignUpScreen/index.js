import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import{Formik} from 'formik';
import { StatusBar } from 'expo-status-bar';
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
    GuestButton,
    BlueButton,

} from './../../components/styles.js';
const {primary, darkLight, secondary,tertiary , green , blue} = Colors;

const SignUpScreen = ({navigation}) =>
{
   const [hidePassword, setHidePassword] = useState(true);
    return (

                 <StyledContainer>
                            <StatusBar style = "dark"/>
                            <InnerContainer>


                                <PageTitle>RUM BOARD</PageTitle>
                                <SubTitle>Register</SubTitle>


                                <Formik
                                    initialValues = {{email: '', password: ''}}
                                    onSubmit = {(values) => {
                                        console.log(values);
                                    }}

                                >
                                   {({handleChange, handleBlur, handleSubmit, values }) => (

                                 <StyledFormArea>

                                      <MyTextInput
                                       label = "UPRM E-mail"
                                       icon = "mail"
                                       placeholder = "example@upr.edu"
                                       placeholderTextColor = {blue}
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
                                      <MyTextInput
                                         label = "Enter Password Again"
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



                                    <BlueButton
                                        activeOpacity={0.8}
                                        onPress={() => Alert.alert('Created account')}>
                                        <ButtonText>

                                            Create Account
                                        </ButtonText>
                                    </BlueButton>


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

            <RightIcon onPress ={() => setHidePassword(!hidePassword)}>
                <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'}    size = {30} color = {green} />
            </RightIcon>)}
    </View>)

};
export default SignUpScreen;
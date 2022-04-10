import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Alert} from 'react-native';

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
    ButtontText,
    Colors,
    GuestButton
} 
from './../components/styles';

const {primary, darkLight, secondary,tertiary , green } = Colors;


//APi Client
import axios from 'axios';





const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style = "dark"/>
            <InnerContainer>
                {/* Code for the welcome screen implement logo  */}
                <PageLogo resizeMode = "cover" source = {require('./../assets/logo(2).png')} />

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
                        {/* Code for the login feature */}
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
                     onPress={() => Alert.alert('Log in')}>
                        <ButtontText>
                            Login
                        </ButtontText>
                    </StyledButton>

                    <StyledTextUnderlined
                       onPress={() => Alert.alert('Sign up')}>
                        <ButtontText>
                           Sign up
                        </ButtontText>
                    </StyledTextUnderlined>

                    <GuestButton
                    activeOpacity={0.8}
                    onPress={() => Alert.alert('Login as Guest')}>
                        <ButtontText>
                        Login as Guest
                        </ButtontText>
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
const SignupButton = () =>
{
    return(
    <View>

    </View>
    );

};





export default Login;
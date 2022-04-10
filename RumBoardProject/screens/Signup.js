import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';

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
}
from './../components/styles';

const {primary, darkLight, secondary,tertiary , green } = Colors;


//APi Client
import axios from 'axios';





const Signup = () => {
    //const [hidePassword, setHidePassword] = useState(true);
    return (
        <View>
         <StyledContainer>
                    <StatusBar style = "dark"/>
                    <InnerContainer>
                        {/* Code for the welcome screen implement logo  */}
                        <PageLogo resizeMode = "cover" source = {require('./../assets/logo(1).png')} />
                        <PageTitle>RUM BOARD</PageTitle>
                        <SubTitle>Account Login</SubTitle>


                        <Formik
                            initialValues = {{email: '', password: ''}}
                            onSubmit = {(values) => {
                                console.log(values);
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
                            <StyledButton >
                                <ButtontText>
                                    Create Account
                                </ButtontText>
                            </StyledButton>

        </View>

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




export default Signup;
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

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
} from './../../components/styles.js';
import{
    AboutText,
} from './../../components/about_style.js';
const AboutScreen = () => (
      <StyledContainer>
        <SafeAreaView>
        <AboutText>
              Team 2:{"\n"}
                  Emmanuel Gonzalez {"\n"}
                  Jonathan Figueroa{"\n"}
                  Jeanpaul Marrero{"\n"}
                  Sebastian Caballero{"\n"}
                  Javier Pagan{"\n"}
                  Gabriel Diaz{"\n"}

        </AboutText>
        </SafeAreaView>
      </StyledContainer>
);

export default AboutScreen;
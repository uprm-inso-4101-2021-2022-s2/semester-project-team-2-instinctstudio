import {createStackNavigator} from 'react-navigation-stack';

import Login from '../views/LoginScreen';
import SignUpScreen from '../views/SignUpScreen';


const AuthNavigatorConfig = {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none',

};

const RouteConfigs =  {
   Login:Login,
   SignUp:{
        screen: SignUpScreen,
    },

};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
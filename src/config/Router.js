import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import PhoneLogin from '../screens/PhoneLogin';

export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
});

export default Root = StackNavigator({
    LoginScreen: {
        screen: LoginStack,
    },
    PhoneLogin: {
        screen: PhoneLogin,
    },
},  {
    mode: 'modal',
});
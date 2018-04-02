import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import PhoneLogin from '../screens/PhoneLogin';
import EmailLogin from '../screens/EmailLogin';

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
    EmailLogin: {
        screen: EmailLogin,
    },
},  {
    mode: 'modal',
});
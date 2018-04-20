import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import EmailLogin from '../screens/EmailLogin';
import MainScreen from '../screens/MainScreen';
import privacypolicy from '../screens/privacypolicy';
import ActualLoginScreen from '../screens/ActualLoginScreen';

export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
});

export default Root = StackNavigator({
    LoginScreen: {
        screen: LoginStack,
    },
    EmailLogin: {
        screen: EmailLogin,
    },
    MainScreen: {
        screen: MainScreen,
    },
    privacypolicy: {
        screen: privacypolicy,
    },
    ActualLoginScreen: {
        screen: ActualLoginScreen,
    },
},  {
    mode: 'card',
});

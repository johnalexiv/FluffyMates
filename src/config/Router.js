import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import EmailLogin from '../screens/EmailLogin';
import MainScreen from '../screens/MainScreen';
import privacypolicy from '../screens/privacypolicy';
import ActualLoginScreen from '../screens/ActualLoginScreen';
import FAQ from '../screens/FAQ';
import ChangeInfo from '../screens/ChangeInfo';
import AboutUs from '../screens/AboutUs';
import Settings from '../screens/Settings';

export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
});

export default Root = StackNavigator({
    LoginScreen: {
        screen: LoginStack,
    },
    Settings: {
        screen: Settings,
    },
    AboutUs: {
        screen: AboutUs,
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
    FAQ: {
        screen: FAQ,
    },
    ChangeInfo: {
        screen: ChangeInfo,

},  {
    mode: 'card',
});

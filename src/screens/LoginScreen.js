import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import LoginSwiper from '../components/Login/LoginSwiper';
import { LinearGradient } from 'expo';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    onSignUpPress = () => {
        this.props.navigation.navigate('EmailLogin');
    }

    onEmailPress = () => {
        //this.props.navigation.navigate('MainScreen');
        this.props.navigation.navigate('ActualLoginScreen');
    }

    onPolicyPress = () => {
        this.props.navigation.navigate('privacypolicy');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginSwiper}>
                    <LoginSwiper />
                </View>

                <View style={styles.buttons}>
                    <View style={styles.viewSignupButton}>
                        <TouchableOpacity style={styles.signupButton}
                            onPress={this.onSignUpPress}
                            >
                            <LinearGradient
                                // colors={['#1e3c72', '#2a5298',]}
                                colors={['#1CB5E0', '#37b8cb',]}
                                style={{ padding: 15, alignItems: 'center', borderRadius: 50 }}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}>
                                <Text style={{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 15}} >
                                    SIGN UP
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewLoginButton}>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.onEmailPress}
                            >
                            <Text style={{color: '#989898', textAlign: 'center', fontSize: 13}} >
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.termsAndConditions}>
                    <Text style={{color: '#C0C0C0', textAlign: 'center', fontSize: 15}}
                            onPress={this.onPolicyPress}>
                        By signing in, you agree to our{" "}
                        <Text style={{color: '#C0C0C0', textAlign: 'center', fontSize: 15}}>
                            Terms of Service and Privacy Policy{" "}
                            <Text style={{color: '#a6a6a6', fontWeight: 'bold',  textAlign: 'center', fontSize: 20}}>
                            ⌄{" "}
                            </Text>
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loginSwiper: {
        flex: 15,
        paddingTop: 30,
    },
    buttons: {
        flex: 3,
        justifyContent: 'flex-start',
    },
    viewSignupButton: {
        flex: 3,
        margin: 5,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
    },
    signupButton: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderRadius: 50,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {width: 2, height: 2},
    },
    viewLoginButton: {
        flex: 2,
        margin: 5,
        paddingHorizontal: 50,
    },
    loginButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 50,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {width: 2, height: 2},
    },
    termsAndConditions: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 15,
        paddingBottom: 20,
        justifyContent: 'space-around',
    },
})

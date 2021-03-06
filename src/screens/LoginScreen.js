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
        this.props.navigation.navigate('MainScreen');
    }

    onPolicyPress = () => {
        this.props.navigation.navigate('privacypolicy');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.whiteSpace}></View>
                
                <View style={styles.loginSwiper}>
                    <LoginSwiper />
                </View>

                <View style={styles.buttons}>
                    <View style={styles.viewLoginButton}>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.onSignUpPress}
                            >
                            <LinearGradient
                                // colors={['#1e3c72', '#2a5298',]}
								colors={['#37b8cb', '#32a9ba',]}
                                // colors={['#1CB5E0', '#37b8cb',]}
                                style={{ padding: 14, alignItems: 'center', borderRadius: 50 }}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}>
                                <Text style={{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 16}} >
                                    LOGIN
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewDemoButton}>
                        <TouchableOpacity style={styles.demoButton}
                            onPress={this.onEmailPress}
                            >
                            <Text style={{color: '#989898', textAlign: 'center', fontSize: 13}} >
                                GET STARTED
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

                <View style={styles.whiteSpace}></View>
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
    },
    buttons: {
        flex: 3,
        justifyContent: 'flex-start',
    },
    viewLoginButton: {
        flex: 3,
        margin: 5,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
    },
    loginButton: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderRadius: 50,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {width: 2, height: 2},
    },
    viewDemoButton: {
        flex: 2,
        margin: 5,
        paddingHorizontal: 50,
    },
    demoButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#ababab',
        borderWidth: 1,
        borderRadius: 50,
        shadowColor: '#989898',
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {width: 2, height: 2},
    },
    termsAndConditions: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 10,
        // paddingBottom: 20,
        justifyContent: 'space-around',
    },
    whiteSpace: {
        flex: 1,
        backgroundColor: 'white',
    },
})

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo';

export default class Settings extends React.Component {
    static navigationOptions = {
        header: null,
    }
    onFAQPress = () => {
        this.props.navigation.navigate('FAQ');
    }

    onChangePress = () => {
        this.props.navigation.navigate('ChangeInfo');
    }

    onPolicyPress = () => {
        this.props.navigation.navigate('privacypolicy');
    }
    
    onAboutPress = () => {
        this.props.navigation.navigate('AboutUs');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.whiteSpace}></View>


                <View style={styles.buttons}>

                    <View style={styles.viewLoginButton}>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.onAboutPress}>
                            <Text style={{color: '#989898', textAlign: 'center', fontSize: 13}} >
                                About Us
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewLoginButton}>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.onFAQPress}
                            >
                            <Text style={{color: '#989898', textAlign: 'center', fontSize: 13}} >
                                FAQ
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewLoginButton}>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.onPolicyPress}
                            >
                            <Text style={{color: '#989898', textAlign: 'center', fontSize: 13}} >
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewLoginButton}>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.onChangePress}
                            >
                            <Text style={{color: '#989898', textAlign: 'center', fontSize: 13}} >
                               Change Account Details
                            </Text>
                        </TouchableOpacity>
                    </View>


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
        // paddingTop: 30,
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
        paddingTop: 10,
        // paddingBottom: 20,
        justifyContent: 'space-around',
    },
    whiteSpace: {
        flex: 1.7,
        backgroundColor: 'white',
    },
})

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

    onFacebookPress = () => {
        this.props.navigation.navigate('PhoneLogin');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginSwiper}>
                    <LoginSwiper />
                </View>

                <View style={styles.buttons}>
                    <View style={styles.viewFacebookButton}>
                        <TouchableOpacity style={styles.facebookButton}
                            onPress={this.onFacebookPress}
                            >
                            <LinearGradient 
                                colors={['#363795', '#005C97']}
                                style={{ padding: 15, alignItems: 'center', borderRadius: 30 }} 
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}>
                                <Text style={{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 20}} >
                                    LOG IN WITH FACEBOOK
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewPhoneButton}>
                        <TouchableOpacity style={styles.phoneButton}>
                            <Text style={{color: '#989898', textAlign: 'center', fontSize: 16}} >
                                LOG IN WITH PHONE NUMBER
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.termsAndConditions}>
                    <Text style={{color: '#C0C0C0', textAlign: 'center', fontSize: 15}}>
                        We dont post anything to Facebook {"\n"}
                        By signing in, you agree to our Terms of Service and Private Policy
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
    viewFacebookButton: {
        flex: 3,
        margin: 5,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
    },
    facebookButton: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderRadius: 40,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {width: 2, height: 2},
    },
    viewPhoneButton: {
        flex: 2,
        margin: 5,
        paddingHorizontal: 50,
    },
    phoneButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 40,
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
  
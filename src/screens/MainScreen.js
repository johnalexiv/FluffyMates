import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import SwipeCards from './SwipeCards';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import "prop-types";
import LikedHistory from './LikedHistory';
import Settings from './Settings';
import TabBar from './tabBar';
import Filters from '../components/filters/filters';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          cards: []
        };
      }

    onUpdate = (val) => {
        let array = this.state.cards.slice(0)
        array.push(val)
        this.setState({
            cards: array.slice(0)
        })
    };

    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
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
            <ScrollableTabView
                style={styles.container}
                initialPage={2}
                tabBarPosition='top'
                locked={true}
                tabBarActiveTextColor = {'#37B8CB'}
                tabBarInactiveTextColor = {'darkgray'}
                renderTabBar={() => <TabBar />}>
            <View tabLabel='ios-construct' style={styles.tabView}>

            <View style={styles.sampleCard}>
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
            </View>

            </View>
                <ScrollView tabLabel= 'md-options' style={styles.tabView}>
                    <View style={styles.sampleCard}>
                      <Filters/>
                      </View>
                </ScrollView>

                <View tabLabel="ios-paw" style={styles.swipeView}>
                    <SwipeCards
                        onUpdate={this.onUpdate}
                    />
                </View>

                <View tabLabel="ios-heart" style={styles.tabView}>
                    <View style={styles.likedHistoryContainer}>
                        <LikedHistory
                            data = {this.state.cards}
                        />
                    </View>
                </View>

            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
    },
    swipeView: {
        flex: 1,
    },
    tabView: {
        flex: 1,
    },
    likedHistoryContainer: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,    
    },
    sampleCard: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
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
        flex: 1.7,
        backgroundColor: 'white',
    },
});

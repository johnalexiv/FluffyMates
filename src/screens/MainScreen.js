import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    FlatList, 
    ActivityIndicator,
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
import { List, ListItem, Avatar, Badge } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import Communications from 'react-native-communications';

import PetProfile from './PetProfile';
import { pets } from '../petsdata.json'

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          list: [],
          refreshing: false,
          currentPet: null,
        };
      }

    onUpdate = (val) => {
        let array = this.state.list.slice(0)
        array.push(val)
        this.setState({
            list: array.slice(0)
        })
    };

    generatePetData(id) {
        var petData = null
        let species = String(id).charAt(0)

        switch (species) {
            case 'C':
                petData  = this.returnArrayElementById(pets.cats, id);
                break;

            case 'D':
                petData = this.returnArrayElementById(pets.dogs, id);
                break;

            default:
                petData = 'default'
                break;
        }

        this.state.currentPet = petData
        return (petData);
    }

    returnArrayElementById(array, id) {
        let index = array.findIndex(function(array) {
            return array.id === id; 
        })
        return (array[index]);
    }

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


    onProfilePress = (id) => {
        let item = id
        this.props.navigation.navigate('PetProfile', { passedData: item });
    }

  handleRefresh = () => {

    this.setState({
      refreshing: true,
      list: this.state.list,
    }, () => {
      this.setState({
        refreshing: false,
      })
    })
    
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "90%",
          backgroundColor: "#CED0CE",
          marginLeft: "5%"
        }}
      />
    );
  };

  deleteItem = (key) => {
    var array = this.state.list
    let index = array.findIndex(function(array) {
        return array === key; 
    })

    array.splice(index, 1)
    this.setState({list: array.slice(0)})
  }

  

  renderLikes() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
        <FlatList
          style = {styles.flatList}
          data = {this.state.list}
          ItemSeparatorComponent = {this.renderSeparator}
          onEndReachedThreshold = {50}
          refreshing = {this.state.refreshing}
          onRefresh = {this.handleRefresh}
          ListHeaderComponent = {() => (!this.state.list.length ?
            <View style = {styles.emptyMessageContainer}>
              <Text style= {styles.emptyMessageTitle}>
                No pets here.
              </Text>
              <Text style = {styles.emptyMessageBody}>
                <B>Swipe right</B> to add your potential fluffy{"\n"}
                mate to this page. Unless you already{"\n"}
                have, in which case: <B>pull to refresh</B>{"\n"}
                to see the list here. 
              </Text>  
            </View>
          : null)}

          renderItem = {({ item }) => (

          <Swipeout 
            autoClose = 'true'
            backgroundColor ='transparent'
            buttonWidth = {80}
            right = {[{
              text: 'Delete',
              backgroundColor: '#F44646',
              onPress: () => {
                {
                  this.deleteItem(item)
                }
              }
            }]}f
            >
            
            <ListItem
              key={item}
              avatar = { <Avatar rounded large source = {{uri: this.generatePetData(item).photo}} /> }
              title={this.state.currentPet.name}
              subtitle={this.state.currentPet.breed}
              containerStyle={{ borderBottomWidth: 0 }}
              button onPress = {() => 
                this.onProfilePress(item)
            }
              hideChevron = {true}
              badge={{ 
                element:
                  <Badge 
                    value = {<Image source={require('../images/phone.png')} style = {{width: 40, height: 40, alignContent: 'flex-end', alignSelf: 'center'}}/>}
                    containerStyle = {{ backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', height: 80, paddingTop: 10 }}
                    onPress={() => Communications.phonecall(this.state.currentPet.phone, true)}
                />
              }}

            />
          
          </Swipeout>

        )}

        />
    );
  }

    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                initialPage={2}
                tabBarPosition='top'
                locked={true}
                tabBarActiveTextColor = '#37B8CB'
                tabBarInactiveTextColor = 'darkgray'
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
                        {this.renderLikes()}
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
    flatList: {
        flex: 1,
      },
      emptyMessageContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '75%',
        marginLeft: '10%',
        marginRight: '10%',
      },
      emptyMessageTitle: {
        fontSize: 20,
        color: '#989898',
        textAlign: 'center',
      },
      emptyMessageBody: {
        marginTop: 8,
        fontSize: 15,
        color: '#989898',
        textAlign: 'center',
        height: 80
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

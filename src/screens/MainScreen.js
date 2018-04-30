import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ImageBackground,
    FlatList, 
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
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
import filters from '../../global';
import MoreInfoButton from './MoreInfoButtons';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sliderOneChanging: false,
        sliderOneValue: [25],
        allPets: [],
        status: '',
        pet: [],
        petName: '',
        petBreed: '',
        petDescription: '',
        petPictures: [],
        petPicture: '',
        petURL: '',
        petBirthDate: '',
        potLocation: '',
       }
    }
  

    onProfilePress = () => {
      this.props.navigation.navigate('PetProfile');
  }
  
    render() {
      return ( 
        <View style = { styles.card }>
  
          <ImageBackground
            source = {{uri: this.props.source }}
  
            style = { {width: '100%', height: '100%'} } > 
            <View style = {styles.emptySpace}>
            <Text></Text>
            </View>
  
            <View style = { styles.moreInfoContainer }>
               
                <TouchableOpacity
                  onPress={this.onProfilePress}
                  style={styles.moreInfoButton}>
  
                  <MoreInfoButton
                    name = {this.props.name}
                    breed = {this.props.breed}
                    distance = {this.props.distance}
                    />
  
                </TouchableOpacity>
  
            </View>
  
          </ImageBackground>
  
        </View>
      )
    }
  }
   
  class NoMoreCards extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style = {styles.noMoreCardsContainer}>
          <Text style={styles.noMoreCardsTitle}>
            You've reached the end!
          </Text>
          <Text style={styles.noMoreCardsBody}>
            Please check back soon.
          </Text>
        </View>
      )
    }
  }
   


export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);

        if (filters.species == "D") {
            this.state = {
              cards: [
                //{id: `filters.index`, name: `${pets.dogs[filters.index].name}`, breed: `${pets.dogs[filters.index].breed}`, distance: `${pets.dogs[filters.index].radius}`, source: `${pets.dogs[filters.index].photo}`},
                {id: `D00`, name: `${pets.dogs[0].name}`, breed: `${pets.dogs[0].breed}`, distance: `${pets.dogs[0].radius}`, source: `${pets.dogs[0].photo}`},
                {id: `D01`, name: `${pets.dogs[1].name}`, breed: `${pets.dogs[1].breed}`, distance: `${pets.dogs[1].radius}`, source: `${pets.dogs[1].photo}`},
                {id: `D02`, name: `${pets.dogs[2].name}`, breed: `${pets.dogs[2].breed}`, distance: `${pets.dogs[2].radius}`, source: `${pets.dogs[2].photo}`},
                {id: `D03`, name: `${pets.dogs[3].name}`, breed: `${pets.dogs[3].breed}`, distance: `${pets.dogs[3].radius}`, source: `${pets.dogs[3].photo}`},
                {id: `D04`, name: `${pets.dogs[4].name}`, breed: `${pets.dogs[4].breed}`, distance: `${pets.dogs[4].radius}`, source: `${pets.dogs[4].photo}`},
                {id: `D05`, name: `${pets.dogs[5].name}`, breed: `${pets.dogs[5].breed}`, distance: `${pets.dogs[5].radius}`, source: `${pets.dogs[5].photo}`},
                {id: `D06`, name: `${pets.dogs[6].name}`, breed: `${pets.dogs[6].breed}`, distance: `${pets.dogs[6].radius}`, source: `${pets.dogs[6].photo}`},
                {id: `D07`, name: `${pets.dogs[7].name}`, breed: `${pets.dogs[7].breed}`, distance: `${pets.dogs[7].radius}`, source: `${pets.dogs[7].photo}`},
                {id: `D08`, name: `${pets.dogs[8].name}`, breed: `${pets.dogs[8].breed}`, distance: `${pets.dogs[8].radius}`, source: `${pets.dogs[8].photo}`},
                {id: `D09`, name: `${pets.dogs[9].name}`, breed: `${pets.dogs[9].breed}`, distance: `${pets.dogs[9].radius}`, source: `${pets.dogs[9].photo}`},
                {id: `D10`, name: `${pets.dogs[10].name}`, breed: `${pets.dogs[10].breed}`, distance: `${pets.dogs[10].radius}`, source: `${pets.dogs[10].photo}`},
                {id: `D11`, name: `${pets.dogs[11].name}`, breed: `${pets.dogs[11].breed}`, distance: `${pets.dogs[11].radius}`, source: `${pets.dogs[11].photo}`},
                {id: `D12`, name: `${pets.dogs[12].name}`, breed: `${pets.dogs[12].breed}`, distance: `${pets.dogs[12].radius}`, source: `${pets.dogs[12].photo}`},
                {id: `D13`, name: `${pets.dogs[13].name}`, breed: `${pets.dogs[13].breed}`, distance: `${pets.dogs[13].radius}`, source: `${pets.dogs[13].photo}`},
                {id: `D14`, name: `${pets.dogs[14].name}`, breed: `${pets.dogs[14].breed}`, distance: `${pets.dogs[14].radius}`, source: `${pets.dogs[14].photo}`},
              ],

          list: [],
          refreshing: false,
          currentPet: null,
            };
          } else if (filters.species  == "C" ){
              // for cats
              this.state = {
                cards: [
                  {id: `C00`, name: `${pets.cats[0].name}`, breed: `${pets.cats[0].breed}`, distance: `${pets.cats[0].radius}`, source: `${pets.cats[0].photo}`},
                  {id: `C01`, name: `${pets.cats[1].name}`, breed: `${pets.cats[1].breed}`, distance: `${pets.cats[1].radius}`, source: `${pets.cats[1].photo}`},
                  {id: `C02`, name: `${pets.cats[2].name}`, breed: `${pets.cats[2].breed}`, distance: `${pets.cats[2].radius}`, source: `${pets.cats[2].photo}`},
                  {id: `C03`, name: `${pets.cats[3].name}`, breed: `${pets.cats[3].breed}`, distance: `${pets.cats[3].radius}`, source: `${pets.cats[3].photo}`},
                  {id: `C04`, name: `${pets.cats[4].name}`, breed: `${pets.cats[4].breed}`, distance: `${pets.cats[4].radius}`, source: `${pets.cats[4].photo}`},
                  {id: `C05`, name: `${pets.cats[5].name}`, breed: `${pets.cats[5].breed}`, distance: `${pets.cats[5].radius}`, source: `${pets.cats[5].photo}`},
                  {id: `C06`, name: `${pets.cats[6].name}`, breed: `${pets.cats[6].breed}`, distance: `${pets.cats[6].radius}`, source: `${pets.cats[6].photo}`},
                  {id: `C07`, name: `${pets.cats[7].name}`, breed: `${pets.cats[7].breed}`, distance: `${pets.cats[7].radius}`, source: `${pets.cats[7].photo}`},
                  {id: `C08`, name: `${pets.cats[8].name}`, breed: `${pets.cats[8].breed}`, distance: `${pets.cats[8].radius}`, source: `${pets.cats[8].photo}`},
                  {id: `C09`, name: `${pets.cats[9].name}`, breed: `${pets.cats[9].breed}`, distance: `${pets.cats[9].radius}`, source: `${pets.cats[9].photo}`},
                  {id: `C10`, name: `${pets.cats[10].name}`, breed: `${pets.cats[10].breed}`, distance: `${pets.cats[10].radius}`, source: `${pets.cats[10].photo}`},
                  {id: `C11`, name: `${pets.cats[11].name}`, breed: `${pets.cats[11].breed}`, distance: `${pets.cats[11].radius}`, source: `${pets.cats[11].photo}`},
                  {id: `C12`, name: `${pets.cats[12].name}`, breed: `${pets.cats[12].breed}`, distance: `${pets.cats[12].radius}`, source: `${pets.cats[12].photo}`},
                  {id: `C13`, name: `${pets.cats[13].name}`, breed: `${pets.cats[13].breed}`, distance: `${pets.cats[13].radius}`, source: `${pets.cats[13].photo}`},
                  {id: `C14`, name: `${pets.cats[14].name}`, breed: `${pets.cats[14].breed}`, distance: `${pets.cats[14].radius}`, source: `${pets.cats[14].photo}`},
                ],
                list: [],
                refreshing: false,
                currentPet: null,
              };
      
            }

/*
        this.state = {
          list: [],
          refreshing: false,
          currentPet: null,
          
        };
        */
      }

      handleYup = (card) => {
        filters.index = filters.index + 1;
        this.props.onUpdate(card.id);
        console.log(`Yup for ${card.name}`)
      }
    
      handleNope (card) {
        filters.index = filters.index + 1;
        console.log(`Nope for ${card.name}`)
      }
      handleMaybe (card) {
        filters.index = filters.index + 1;
        console.log(`Maybe for ${card.name}`)
      }
      renderSwipeCards() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
          <SwipeCards
            cards={this.state.cards}
            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            stack={true}
            stackDepth={10} 
          />
        )
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
    var index = array.getIndex(key)
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
                    onPress={() => Communications.phonecall('7023843333', true)}
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
                        {this.renderSwipeCards()}
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
    card: {
        flex: 1,
      },
      noMoreCardsContainer: {
        marginLeft: '10%',
        marginRight: '10%',
        justifyContent: 'center',
        alignContent: 'center',
      },
      noMoreCardsTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#989898',
      },
      noMoreCardsBody: {
        marginTop: 8,
        fontSize: 15,
        textAlign: 'center',
        color: '#989898',
        height: 80
      },
      emptySpace: {
        flex: 3.8
      },
      moreInfoContainer: {
        flex: .8,
      },
      moreInfoButton: {
        flex: 1,
      },
      name: {
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
      },
      breed: {
        fontSize: 30,
        color: 'white',
      },
      pin: {
        height: 25,
        width: 25,
      },
      distance: {
        fontSize: 25,
        color: 'white',
      },
      moreInfo: {
        height: 30,
        width: 30,
      },
});

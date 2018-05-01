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
import { Dropdown } from 'react-native-material-dropdown';
import "prop-types";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from '../components/filters/CustomMarker';

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
        petID: '',
       }
    }


    onPressButton = (id) => {
        let item = id
        this.props.onProfilePress(item)
    }


    render() {
      return (
        <View style = { styles.card }>

          <ImageBackground
            source = {{uri: this.props.photo }}

            style = { {width: '100%', height: '100%'} } >
            <View style = {styles.emptySpace}>
            <Text></Text>
            </View>

            <View style = { styles.moreInfoContainer }>

                <TouchableOpacity
                  onPress= {() =>  this.onPressButton(this.props.id) }
                  style={styles.moreInfoButton}>
                  <MoreInfoButton
                    name = {this.props.name}
                    breed = {this.props.breed}
                    distance = {this.props.radius}
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
            Youve reached the end!
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
        super(props)
        this.state = {
          cards: [...pets.dogs, ...pets.cats, ...pets.birds],
          list: [],
          refreshing: false,
          currentPet: null,
          sliderOneChanging: false,
          sliderOneValue: [100],
          selectedSpecies: "null",
          selectedBreed: "null",
          selectedColor: "null",
          selectedAge: "null",
          selectedSex: "null",
          selectedSize: "null",
        };

      }

      sliderOneValuesChangeStart = () => {
        this.setState({
          sliderOneChanging: true,
        });
      }

      sliderOneValuesChange = (values) => {
        let newValues = [0];
        newValues[0] = values[0];
        this.setState({
          sliderOneValue: newValues,
        });
      }

      sliderOneValuesChangeFinish = () => {
        this.setState({
          sliderOneChanging: false,
        });
      }

      onSpeciesChangeText = (text) => {
          this.setState({selectedSpecies: text});
          filters.species = text[0];
          console.log(`Species: ${filters.species }`)
          if (filters.species == "D") {
            this.setState({cards: [...pets.dogs] });
          } else if (filters.species == "C") {
            this.setState({cards: [...pets.cats] });
          } else if (filters.species == "B") {
            this.setState({cards: [...pets.birds] });
          }
          this.forceUpdate();
        }

        onBreedChangeText = (text) => {
            this.setState({selectedBreed: text});
          }
       onColorChangeText = (text) => {
              this.setState({selectedColor: text});
         }
       onAgeChangeText = (text) => {
                this.setState({selectedAge: text});
              }
       onSexChangeText = (text) => {
                  this.setState({selectedSex: text});
                }

       onSizeChangeText = (text) => {
                   this.setState({selectedSize: text});
                   }
     renderFilters() {
       var color = new Set();
       var breeds = new Set();
       var sp = new Set();
       var colors = [];
       var breed = [];
       var species = [];
       var dogCount = (Object.keys(pets.dogs).length);
       var catCount = (Object.keys(pets.cats).length);
       var birdCount = (Object.keys(pets.birds).length);

      for(let i = 0; i < dogCount; i++)
       {
         color.add(pets.dogs[i].color);
         breeds.add(pets.dogs[i].breed2);
         sp.add(pets.dogs[i].species);
       }

       for(let i = 0; i < catCount; i++)
        {
          color.add(pets.cats[i].color);
          breeds.add(pets.cats[i].breed2);
          sp.add(pets.cats[i].species);
        }
        for(let i = 0; i < birdCount; i++)
        {
          color.add(pets.birds[i].color);
          breeds.add(pets.birds[i].breed2);
          sp.add(pets.birds[i].species);
        }

       sp.forEach(function(sp){
         species.push({value: sp})
       });

       color.forEach(function(color){
         colors.push({value: color})
       });

       breeds.forEach(function(breeds){
         breed.push({value: breeds})
       });
       let gender = [
       {
         value: 'Female',
       },
       {
         value: 'Male',
       },
       {
         value: 'Both',
       },
       ];

       let age = [
       {
         value: 'Puppy',
       },
       {
         value: 'Young',
       },
       {
         value: 'Adult',
       },
       {
         value: 'Senior',
       },
       ];

       let size = [
       {
         value: 'Small',
       },
       {
         value: 'Medium',
       },
       {
         value: 'Large',
       },
       {
         value: 'Extra Large',
       },
       ];
         return (
           <View>
           <View>
           <Dropdown
                  label='Species'
                  data={species}
                  fontSize = {20}
                  textColor = {'#37B8CB'}
                  value = {this.selectedSpecies}
                  onChangeText={this.onSpeciesChangeText}
                />
           </View>

           <View>
           <Dropdown
                  label='Breed'
                  data={breed}
                  fontSize = {20}
                  textColor = {'#37B8CB'}
                  value = {this.selectedBreed}
                  onChangeText={this.onBreedChangeText}
                />
           </View>

           <View>
           <Dropdown
                  label='Color'
                  data={colors}
                  fontSize = {20}
                  textColor = {'#37B8CB'}
                  value = {this.selectedColor}
                  onChangeText={this.onColorChangeText}
                />
           </View>

           <View>
           <Dropdown
                  label='Gender'
                  data={gender}
                  fontSize = {20}
                  textColor = {'#37B8CB'}
                  value = {this.selectedSex}
                  onChangeText={this.onSexChangeText}
                />
           </View>

           <View>
           <Dropdown
                  label='Age'
                  data={age}
                  fontSize = {20}
                  textColor = {'#37B8CB'}
                  value = {this.selectedAge}
                  onChangeText={this.onAgeChangeText}
                />
           </View>

           <View>
           <Dropdown
                  label='Size'
                  data={size}
                  fontSize = {20}
                  textColor = {'#37B8CB'}
                  value = {this.selectedSize}
                  onChangeText={this.onSizeChangeText}
                />
           </View>

     <View style={styles.sliders}>
               <View style={styles.sliderOne}>
                 <Text style={styles.textLeft}>Within:</Text>
                 <Text style={[styles.textRight, this.state.sliderOneChanging && {color: '#A9A9A9' }]}>{this.state.sliderOneValue}</Text>
                 <Text style ={styles.label} >mi</Text>
               </View>
               <MultiSlider
                 values={this.state.sliderOneValue}
                 step={1}
                 min ={1}
                 max = {600}
                 sliderLength={280}
                 onValuesChangeStart={this.sliderOneValuesChangeStart}
                 onValuesChange={this.sliderOneValuesChange}
                 onValuesChangeFinish={this.sliderOneValuesChangeFinish}

                 selectedStyle={{
                   backgroundColor: '#37B8CB',
                 }}

                 unselectedStyle={{
                   backgroundColor: 'silver',
                 }}

                 trackStyle={{
                   height:10,
                   backgroundColor: 'red',
                 }}

                 touchDimensions={{
                   height: 40,
                   width: 40,
                   borderRadius: 20,
                   slipDisplacement: 40,
                 }}

                 containerStyle={{
                   height:40,
                   marginLeft: 20
                 }}

                 icon= {true}

                 customMarker = {CustomMarker}
               />
           </View>
           </View>
         );

   }

      handleYup = (card) => {
        filters.index = filters.index + 1;
        this.onUpdate(card.id);
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
            renderCard={(cardData) => <Card {...cardData} onProfilePress = {this.onProfilePress}/>}
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

            case 'B':
                petData = this.returnArrayElementById(pets.birds, id);
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
                      {this.renderFilters()}
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
    },  sliders: {
      width: 280,
    },
    textRight: {
      textAlign: 'right',
      paddingVertical: 20,
      marginLeft: 150,
      color: 'darkgray'

    },
    textLeft:
    {
      textAlign: 'left',
      paddingVertical: 20,
      fontSize:20,
      color: 'darkgray'

    },
    title: {
      fontSize: 20,
      textAlign: 'left',
    },
    sliderOne: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    label:
    {
    marginTop: 20,
    color: 'darkgray'
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

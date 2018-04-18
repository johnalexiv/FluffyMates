import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
} from 'react-native';
import SwipeCards from '../components/Main/SwipeCards';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown';
import "prop-types";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props){
       super(props);

     this.state = {
       sliderOneChanging: false,
       sliderOneValue: [25],
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

    render() {
      let colors = [
        {
        value: 'black',
      },
      {
        value: 'white',
      },
      {
        value: 'tan',
      },

      {
        value: 'grey',
      },
      ];

      let species = [
        {
        value: 'dog',
      },
      {
        value: 'cat',
      },
      {
        value: 'rabbit',
      },
      {
        value: 'horse',
      },
      {
        value: 'cow',
      },
      {
        value: 'alpaca',
      },
      ];

      let breed = [
      {
        value: 'Pitbull',
      },
      {
        value: 'Great Dane',
      },
      {
        value: 'Maltese',
      },
      {
        value: 'Mix',
      },
      {
        value: 'German Shepard',
      },
      {
        value: 'Pomeranian',
      },
      ];

      let gender = [
      {
        value: 'female',
      },
      {
        value: 'male',
      },
      {
        value: 'both',
      },
      ];

      let age = [
      {
        value: 'puppy',
      },
      {
        value: 'young',
      },
      {
        value: 'adult',
      },
      {
        value: 'senior',
      },
      ];

      let size = [
      {
        value: 'small',
      },
      {
        value: 'medium',
      },
      {
        value: 'large',
      },
      {
        value: 'extra large',
      },
      ];
        return (
            <ScrollableTabView
                style={styles.container}
                initialPage={1}
                tabBarPosition='top'
                locked={true}
            >
                <ScrollView tabLabel= {"ios-filters"} style={styles.tabView}>
                    <View style={styles.sampleCard}>
                    <View>
                    <Dropdown
                           label='Species'
                           data={species}
                           fontSize = {20}
                           textColor = {'#37B8CB'}
                         />
                    </View>

                    <View>
                    <Dropdown
                           label='Breed'
                           data={breed}
                           fontSize = {20}
                           textColor = {'#37B8CB'}
                         />
                    </View>

                    <View>
                    <Dropdown
                           label='Color'
                           data={colors}
                           fontSize = {20}
                           textColor = {'#37B8CB'}
                         />
                    </View>

                    <View>
                    <Dropdown
                           label='Gender'
                           data={gender}
                           fontSize = {20}
                           textColor = {'#37B8CB'}
                         />
                    </View>

                    <View>
                    <Dropdown
                           label='Age'
                           data={age}
                           fontSize = {20}
                           textColor = {'#37B8CB'}
                         />
                    </View>

                    <View>
                    <Dropdown
                           label='Size'
                           data={size}
                           fontSize = {20}
                           textColor = {'#37B8CB'}
                         />
                    </View>
                    <View style={styles.sliders}>
                              <View style={styles.sliderOne}>
                                <Text style={styles.textLeft}>Within:</Text>
                                <Text style={[styles.textRight, this.state.sliderOneChanging && {color: 'silver' }]}>{this.state.sliderOneValue}</Text>
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

                                }}

                                icon= {true}

                                customMarker = {CustomMarker}
                              />
                          </View>

                    </View>
                </ScrollView>

                <View tabLabel="ios-paw" style={styles.swipeView}>
                    <SwipeCards/>
                </View>

                <ScrollView tabLabel="ios-heart" style={styles.tabView}>
                    <View style={styles.sampleCard}>
                        <Text>MyPets</Text>
                    </View>
                </ScrollView>

            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
    },
    test: {
        flex: 1,
    },
    swipeView: {
        flex: 1,
    },
    tabView: {
        flex: 1,
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
    sliders: {
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
});

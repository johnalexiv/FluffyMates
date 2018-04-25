'use strict';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import "prop-types";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';
import pets from  '../../petsdata'

export default class Filters extends React.Component {
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
        <View>
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
}

const styles = StyleSheet.create({
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

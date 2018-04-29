// SwipeCards.js
'use strict';
 
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import filters from '../../global';
import MoreInfoButton from './MoreInfoButtons';
import SwipeCards from 'react-native-swipe-cards';
import RescuePetsAPI from '../RescuePetsAPI';
import { pets } from '../petsdata.json'

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

  UNSAFE_componentWillMount() {
    /*
    RescuePetsAPI.GetInformation().then((res) => {
      this.setState({
        status: res.status,
        AllPets: res.data,
        pet: res.data[0],
        petName: res.data[0].animalName,
        petDescription: res.data[0].animalDescription,
        petPictures: res.data[0].animalPictures,
        petBreed: res.data[0].animalBreed,
        petPicture: res.data[0].animalPictures[0].url
      })
    });
    */
    fetch('https://api.rescuegroups.org/http/', RescuePetsAPI.GetInformation())
    .then((res) => res.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('parsing failed', error))

    console.log(RescuePetsAPI.GetInformation())
  }
 
  render() {
    return ( 
      <View style = { styles.card }>

        <ImageBackground
          source = {{uri: this.props.source }}

          style = { {width: '100%', height: '100%', resizeMode: 'contain'} } > 
          <View style = {styles.emptySpace}>
          <Text></Text>
          </View>

          <View style = { styles.moreInfoContainer }>
             
              <TouchableOpacity
                onPress={this._onPressButton}
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
 
export default class extends React.Component {
  constructor(props) {
    super(props);
    filters.species = "D";
    filters.index = 0;
    var image = `${pets.dogs[filters.index].photo}`;
    var selectedSpecies = filters.species;
    console.log(`Species: ${filters.species }`)
    if (selectedSpecies == "D") {
      this.state = {
        list: [],
        cards: [
          {id: '1', name: `${pets.dogs[filters.index].name}`, breed: `${pets.dogs[filters.index].breed}`, distance: `${pets.dogs[filters.index].radius}`, source: `${pets.dogs[filters.index].photo}`},
          {id: '2', name: 'Archie', breed: 'Corgi', distance: '8', source: require('../images/corgi.jpg')},
          {id: '3', name: 'Vinnie', breed: 'Italian Greyhound', distance: '16', source: require('../images/dog.jpeg')},
          {id: '4', name: 'Popcorn', breed: 'Labrador', distance: '52', source: require('../images/labrador.jpg')},
          {id: '5', name: 'Billy', breed: 'Pitbull Mix', distance: '64', source: require('../images/pitbull_mix.jpg')},
          {id: '6', name: 'Julio', breed: 'Labradoodle', distance: '25', source: require('../images/labradoodle.jpg')},
          {id: '7', name: 'Toby', breed: 'Labrador Mix', distance: '80', source: require('../images/labrador_mix.jpg')},
          {id: '8', name: 'Lady', breed: 'Cocker Spaniel', distance: '17',source: require('../images/cocker_spaniel.jpg')},
        ],
      };
    } else if (selectedSpecies == "C" ){
        // for cats



    }
    this.state = {
      list: [],
      cards: [
        {id: '1', name: `${pets.dogs[filters.index].name}`, breed: `${pets.dogs[filters.index].breed}`, distance: `${pets.dogs[filters.index].radius}`, source: `${pets.dogs[filters.index].photo}`},
        
        
        // {id: 'a1', name: '', breed: '', distance: '', source: require('../images/NotDogs/ad1.jpg')},
        // {id: 'a2', name: '', breed: '', distance: '', source: require('../images/NotDogs/ad2.jpg')},
        
        // {id: '01', name: 'Fluffy', breed: 'Golden Retriever', distance: '32', source: require('../images/golden_retriever.jpg')},
        // {id: '02', name: 'Archie', breed: 'Corgi', distance: '8', source: require('../images/corgi.jpg')},
        // {id: '03', name: 'Vinnie', breed: 'Italian Greyhound', distance: '16', source: require('../images/dog.jpeg')},
        // {id: '04', name: 'Popcorn', breed: 'Labrador', distance: '52', source: require('../images/labrador.jpg')},
        // {id: '05', name: 'Billy', breed: 'Pitbull Mix', distance: '64', source: require('../images/pitbull_mix.jpg')},
        // {id: '06', name: 'Julio', breed: 'Labradoodle', distance: '25', source: require('../images/labradoodle.jpg')},
        // {id: '07', name: 'Toby', breed: 'Labrador Mix', distance: '80', source: require('../images/labrador_mix.jpg')},
        // {id: '08', name: 'Lady', breed: 'Cocker Spaniel', distance: '17',source: require('../images/cocker_spaniel.jpg')},

        // {id: '09', name: 'Ollie', breed: 'Aegean Cat', distance: '32', source: require('../images/NotDogs/cat1.jpg')},
        // {id: '10', name: 'Archie', breed: 'Domestic Short Hair Mix Cat', distance: '8', source: require('../images/NotDogs/cat2.jpg')},
        // {id: '11', name: 'Bernadette', breed: 'British Short Hair Cat', distance: '16', source: require('../images/NotDogs/cat3.jpg')},
        // {id: '12', name: 'Albert', breed: 'Bunny Rabbit', distance: '52', source: require('../images/NotDogs/rabbit1.jpg')},
        // {id: '13', name: 'Pascal', breed: 'Bunny Rabbit', distance: '64', source: require('../images/NotDogs/rabbit2.jpg')},
        // {id: '14', name: 'Petal', breed: 'Bunny Rabbit', distance: '25', source: require('../images/NotDogs/rabbit3.jpg')},
      ],
    };
    
  }
 
  handleYup = (card) => {
    var array = [...this.state.list];
    array.push(card)
    this.setState({list: array.slice(0)});
    this.props.onUpdate(card);
    console.log(`Yup for ${card.name}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.name}`)
  }
  render() {
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
}
 
const styles = StyleSheet.create({
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
})




// SwipeCards.js
// 'use strict';
 
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';

// import MoreInfoButton from './MoreInfoButtons';
// import SwipeCards from 'react-native-swipe-cards';
 
// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//   }
 
//   render() {
//     return ( 

//       <View style = { styles.card }>

//         <ImageBackground
//           source = { this.props.source }
//           style = { {width: '100%', height: '100%'} }
//           >
//           <View style = {styles.emptySpace}>
//           <Text></Text>
//           </View>

//           <View style = { styles.moreInfoContainer }>
             
//               <TouchableOpacity
//                 onPress={this._onPressButton}
//                 style={styles.moreInfoButton}>

//                 <MoreInfoButton
//                   name = {this.props.name}
//                   breed = {this.props.breed}
//                   distance = {this.props.distance}
//                   />

//               </TouchableOpacity>

//           </View>
//         </ImageBackground>
//       </View>
//     )
//   }
// }
 
// class NoMoreCards extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View>
//         <Text style={styles.noMoreCardsText}>No more dogs</Text>
//       </View>
//     )
//   }
// }
 
// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [
//         {name: 'Fluffy', breed: 'Golden Retriever', distance: '32', source: require('../../images/golden_retriever.jpg')},
//         {name: 'Archie', breed: 'Corgi', distance: '8', source: require('../../images/corgi.jpg')},
//         {name: 'Vinnie', breed: 'Italian Greyhound', distance: '16', source: require('../../images/dog.jpeg')},
//         {name: 'Popcorn', breed: 'Labrador', distance: '52', source: require('../../images/labrador.jpg')},
//         {name: 'Julio', breed: 'Labradoodle', distance: '25', source: require('../../images/labradoodle.jpg')},
//         {name: 'Lady', breed: 'Cocker Spaniel', distance: '17',source: require('../../images/cocker_spaniel.jpg')},
//       ]
//     };
//   }
 
//   handleYup (card) {
//     console.log(`Yup for ${card.text}`)
//   }
//   handleNope (card) {
//     console.log(`Nope for ${card.text}`)
//   }
//   handleMaybe (card) {
//     console.log(`Maybe for ${card.text}`)
//   }
//   render() {
//     // If you want a stack of cards instead of one-per-one view, activate stack mode
//     // stack={true}
//     return (
//       <SwipeCards
//         cards={this.state.cards}
//         renderCard={(cardData) => <Card {...cardData} />}
//         renderNoMoreCards={() => <NoMoreCards />}
//         handleYup={this.handleYup}
//         handleNope={this.handleNope}
//         //handleMaybe={this.handleMaybe}
//         // stack={true}
//         loop={true}

//       />
//     )
//   }
// }
 
// const styles = StyleSheet.create({
  // card: {
  //   flex: 1,
  //   width: 375,
  // },
  // noMoreCardsText: {
  //   fontSize: 22
  // },
  // emptySpace: {
  //   flex: 3.8
  // },
  // moreInfoContainer: {
  //   flex: .8,
  // },
  // moreInfoButton: {
  //   flex: 1,
  // },
  // name: {
  //   fontSize: 60,
  //   color: 'white',
  //   fontWeight: 'bold',
  // },
  // breed: {
  //   fontSize: 30,
  //   color: 'white',
  // },
  // pin: {
  //   height: 25,
  //   width: 25,
  // },
  // distance: {
  //   fontSize: 25,
  //   color: 'white',
  // },
  // moreInfo: {
  //   height: 30,
  //   width: 30,
  // },
// })
// SwipeCards.js
'use strict';
 
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';

import MoreInfoButton from './MoreInfoButtons';
import SwipeCards from 'react-native-swipe-cards';
import RescuePetsAPI from '../RescuePetsAPI';
 
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
          source = { this.props.source }
          style = { {width: '100%', height: '100%'} } > 
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
      <View>
        <Text style={styles.noMoreCardsText}>
          You've reached the end!{"\n"}
          Please check back soon.
        </Text>
      </View>
    )
  }
}
 
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      cards: [
        {name: 'Fluffy', breed: 'Golden Retriever', distance: '32', source: require('../images/golden_retriever.jpg')},
        {name: 'Archie', breed: 'Corgi', distance: '8', source: require('../images/corgi.jpg')},
        {name: 'Vinnie', breed: 'Italian Greyhound', distance: '16', source: require('../images/dog.jpeg')},
        {name: 'Popcorn', breed: 'Labrador', distance: '52', source: require('../images/labrador.jpg')},
        {name: 'Billy', breed: 'Pitbull Mix', distance: '64', source: require('../images/pitbull_mix.jpg')},
        {name: 'Julio', breed: 'Labradoodle', distance: '25', source: require('../images/labradoodle.jpg')},
        {name: 'Toby', breed: 'Labrador Mix', distance: '80', source: require('../images/labrador_mix.jpg')},
        {name: 'Lady', breed: 'Cocker Spaniel', distance: '17',source: require('../images/cocker_spaniel.jpg')},
      ],
    };
  }
 
  handleYup = (card) => {
    var array = [...this.state.list];
    array.push(card)
    this.setState({list: array.slice(0)});

    console.log(card)
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
  noMoreCardsText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#383838',
    marginLeft: '10%',
    marginRight: '10%',
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
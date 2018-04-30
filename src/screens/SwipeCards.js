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
 
export default class extends React.Component {
  constructor(props) {
    super(props);
    if (filters.species == "D") {
      
      this.state = {
        list: [],
        cards: [
          //{id: `filters.index`, name: `${pets.dogs[filters.index].name}`, breed: `${pets.dogs[filters.index].breed}`, distance: `${pets.dogs[filters.index].radius}`, source: `${pets.dogs[filters.index].photo}`},
          {id: `0`, name: `${pets.dogs[0].name}`, breed: `${pets.dogs[0].breed}`, distance: `${pets.dogs[0].radius}`, source: `${pets.dogs[0].photo}`},
          {id: `1`, name: `${pets.dogs[1].name}`, breed: `${pets.dogs[1].breed}`, distance: `${pets.dogs[1].radius}`, source: `${pets.dogs[1].photo}`},
          {id: `2`, name: `${pets.dogs[2].name}`, breed: `${pets.dogs[2].breed}`, distance: `${pets.dogs[2].radius}`, source: `${pets.dogs[2].photo}`},
          {id: `3`, name: `${pets.dogs[3].name}`, breed: `${pets.dogs[3].breed}`, distance: `${pets.dogs[3].radius}`, source: `${pets.dogs[3].photo}`},
          {id: `4`, name: `${pets.dogs[4].name}`, breed: `${pets.dogs[4].breed}`, distance: `${pets.dogs[4].radius}`, source: `${pets.dogs[4].photo}`},
          {id: `5`, name: `${pets.dogs[5].name}`, breed: `${pets.dogs[5].breed}`, distance: `${pets.dogs[5].radius}`, source: `${pets.dogs[5].photo}`},
          {id: `6`, name: `${pets.dogs[6].name}`, breed: `${pets.dogs[6].breed}`, distance: `${pets.dogs[6].radius}`, source: `${pets.dogs[6].photo}`},
          {id: `7`, name: `${pets.dogs[7].name}`, breed: `${pets.dogs[7].breed}`, distance: `${pets.dogs[7].radius}`, source: `${pets.dogs[7].photo}`},
          {id: `8`, name: `${pets.dogs[8].name}`, breed: `${pets.dogs[8].breed}`, distance: `${pets.dogs[8].radius}`, source: `${pets.dogs[8].photo}`},
          {id: `9`, name: `${pets.dogs[9].name}`, breed: `${pets.dogs[9].breed}`, distance: `${pets.dogs[9].radius}`, source: `${pets.dogs[9].photo}`},
          {id: `10`, name: `${pets.dogs[10].name}`, breed: `${pets.dogs[10].breed}`, distance: `${pets.dogs[10].radius}`, source: `${pets.dogs[10].photo}`},
          {id: `11`, name: `${pets.dogs[11].name}`, breed: `${pets.dogs[11].breed}`, distance: `${pets.dogs[11].radius}`, source: `${pets.dogs[11].photo}`},
          {id: `12`, name: `${pets.dogs[12].name}`, breed: `${pets.dogs[12].breed}`, distance: `${pets.dogs[12].radius}`, source: `${pets.dogs[12].photo}`},
          {id: `13`, name: `${pets.dogs[13].name}`, breed: `${pets.dogs[13].breed}`, distance: `${pets.dogs[13].radius}`, source: `${pets.dogs[13].photo}`},
          {id: `14`, name: `${pets.dogs[14].name}`, breed: `${pets.dogs[14].breed}`, distance: `${pets.dogs[14].radius}`, source: `${pets.dogs[14].photo}`},
        ],
      };
    } else if (filters.species  == "C" ){
        // for cats
        this.state = {
          list: [],
          cards: [
            {id: `0`, name: `${pets.cats[0].name}`, breed: `${pets.cats[0].breed}`, distance: `${pets.cats[0].radius}`, source: `${pets.cats[0].photo}`},
            {id: `1`, name: `${pets.cats[1].name}`, breed: `${pets.cats[1].breed}`, distance: `${pets.cats[1].radius}`, source: `${pets.cats[1].photo}`},
            {id: `2`, name: `${pets.cats[2].name}`, breed: `${pets.cats[2].breed}`, distance: `${pets.cats[2].radius}`, source: `${pets.cats[2].photo}`},
            {id: `3`, name: `${pets.cats[3].name}`, breed: `${pets.cats[3].breed}`, distance: `${pets.cats[3].radius}`, source: `${pets.cats[3].photo}`},
            {id: `4`, name: `${pets.cats[4].name}`, breed: `${pets.cats[4].breed}`, distance: `${pets.cats[4].radius}`, source: `${pets.cats[4].photo}`},
            {id: `5`, name: `${pets.cats[5].name}`, breed: `${pets.cats[5].breed}`, distance: `${pets.cats[5].radius}`, source: `${pets.cats[5].photo}`},
            {id: `6`, name: `${pets.cats[6].name}`, breed: `${pets.cats[6].breed}`, distance: `${pets.cats[6].radius}`, source: `${pets.cats[6].photo}`},
            {id: `7`, name: `${pets.cats[7].name}`, breed: `${pets.cats[7].breed}`, distance: `${pets.cats[7].radius}`, source: `${pets.cats[7].photo}`},
            {id: `8`, name: `${pets.cats[8].name}`, breed: `${pets.cats[8].breed}`, distance: `${pets.cats[8].radius}`, source: `${pets.cats[8].photo}`},
            {id: `9`, name: `${pets.cats[9].name}`, breed: `${pets.cats[9].breed}`, distance: `${pets.cats[9].radius}`, source: `${pets.cats[9].photo}`},
            {id: `10`, name: `${pets.cats[10].name}`, breed: `${pets.cats[10].breed}`, distance: `${pets.cats[10].radius}`, source: `${pets.cats[10].photo}`},
            {id: `11`, name: `${pets.cats[11].name}`, breed: `${pets.cats[11].breed}`, distance: `${pets.cats[11].radius}`, source: `${pets.cats[11].photo}`},
            {id: `12`, name: `${pets.cats[12].name}`, breed: `${pets.cats[12].breed}`, distance: `${pets.cats[12].radius}`, source: `${pets.cats[12].photo}`},
            {id: `13`, name: `${pets.cats[13].name}`, breed: `${pets.cats[13].breed}`, distance: `${pets.cats[13].radius}`, source: `${pets.cats[13].photo}`},
            {id: `14`, name: `${pets.cats[14].name}`, breed: `${pets.cats[14].breed}`, distance: `${pets.cats[14].radius}`, source: `${pets.cats[14].photo}`},
          ],
        }

    }
  }

  
 
  handleYup = (card) => {
    filters.index = filters.index + 1;
    var array = [...this.state.list];
    array.push(card)
    this.setState({list: array.slice(0)});
    this.props.onUpdate(card);
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
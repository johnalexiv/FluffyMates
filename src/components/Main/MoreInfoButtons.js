import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MoreInfoButton extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (

      <View style={styles.container}>
      
        <View style={styles.topRows}>
          <Text style={styles.name}> {this.props.name} </Text>
          <Text style={styles.breed}> {this.props.breed} </Text>    
        </View>

        <View style={styles.bottomRow}>

          <View style={styles.pinContainer}>
            <Image
              source = {require('../../images/destination-pin.png')}
              style = {styles.pin} />
          </View>

          <View style={styles.distanceContainer}>
            <Text style={styles.distance}> {this.props.distance} miles away </Text>
          </View>

          <View style={styles.moreInfoContainer}>
            <Image
              source = {require('../../images/more-info.png')}
              style = {styles.moreInfo} />
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  topRows: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  bottomRow: {
    flex: .8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 50,
    bottom: 0,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'flex-end'
  },
  breed: {
    fontSize: 25,
    paddingLeft: 3,
    color: 'white',
    justifyContent: 'flex-start'
  },
  pinContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    padding: 3,
  },
  distanceContainer: {
    flex: 20,
    justifyContent: 'center',
  },
  moreInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    marginRight: 5,
  },
  pin: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',

  },
  distance: {
    fontSize: 20,
    color: 'white',

  },
  moreInfo: {
    flex: 1,
    marginRight: 8,
    resizeMode: 'contain',
    justifyContent: 'flex-end',

  }
});

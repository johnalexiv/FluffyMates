'use strict';

import React from 'react';

import {
  StyleSheet,
  Image
} from 'react-native';

export default class CustomMarker extends React.Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={ require('../../images/paw.png')}
        resizeMode='contain'
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 35
  }
});

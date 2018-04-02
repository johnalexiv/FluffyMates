import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

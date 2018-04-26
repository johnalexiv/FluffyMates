import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, Avatar } from 'react-native-elements';

class LikedHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: [
      //   {name: 'Fluffy', breed: 'Golden Retriever', distance: '32', source: require('../../images/golden_retriever.jpg')},
      //   {name: 'Archie', breed: 'Corgi', distance: '8', source: require('../../images/corgi.jpg')},
      //   {name: 'Vinnie', breed: 'Italian Greyhound', distance: '16', source: require('../../images/dog.jpeg')},
      //   {name: 'Popcorn', breed: 'Labrador', distance: '52', source: require('../../images/labrador.jpg')},
      //   {name: 'Julio', breed: 'Labradoodle', distance: '25', source: require('../../images/labradoodle.jpg')},
      //   {name: 'Lady', breed: 'Cocker Spaniel', distance: '17',source: require('../../images/cocker_spaniel.jpg')},
      // ], 
      data: [],
      refreshing: false,

    };
  }


  handleRefresh = () => {
    this.setState({
      refreshing: true,
      data: [
        {name: 'Fluffy', breed: 'Golden Retriever', distance: '32', source: require('../../images/golden_retriever.jpg')},
        {name: 'Archie', breed: 'Corgi', distance: '8', source: require('../../images/corgi.jpg')},
        {name: 'Vinnie', breed: 'Italian Greyhound', distance: '16', source: require('../../images/dog.jpeg')},
        {name: 'Popcorn', breed: 'Labrador', distance: '52', source: require('../../images/labrador.jpg')},
        {name: 'Julio', breed: 'Labradoodle', distance: '25', source: require('../../images/labradoodle.jpg')},
        {name: 'Lady', breed: 'Cocker Spaniel', distance: '17',source: require('../../images/cocker_spaniel.jpg')},
      ], 
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



  render() {
    return (
    
        <FlatList
          style={styles.flatList}
          data={this.state.data}
          renderItem={({ item }) => (
          <ListItem
            key={item.id}
            avatar = { <Avatar rounded large source = {item.source} /> }
            title={`${item.name}`}
            subtitle={item.breed}
            containerStyle={{ borderBottomWidth: 0 }}
          />
        )}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={this.renderSeparator}
        onEndReachedThreshold={50}
        onPressItem={this._onPressItem}
        refreshing = {this.state.refreshing}
        onRefresh = {this.handleRefresh}
        ListHeaderComponent={() => (!this.state.data.length ? 
            <Text
              style= {styles.emptyMessage}>
                Swipe right on a dog{"\n"} for them to show up here
            </Text>  
          : null)}

        />
      
    );
  }
}


export default LikedHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    justifyContent: 'center',
    alignContent: 'center',
  },
  flatList: {
    flex: 1,
    height: 500,
    width: 340,
  },
  emptyMessage: {
    fontSize: 20,
    color: '#383838',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '85%',
    marginLeft: '10%',
    marginRight: '10%',

  }
});

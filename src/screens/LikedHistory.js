import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Badge } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

class LikedHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      refreshing: false,
      activeRowId: null,
    };
  }


  handleRefresh = () => {

    this.setState({
      refreshing: true,
      list: this.props.data,
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
    var array = this.props.data
    var index = array.findIndex(function(array) {
      return array.id === key;
    })
    array.splice(index, 1)
    this.setState({list: array.slice(0)})
  }

  render() {

    return (
        
        <FlatList
          style = {styles.flatList}
          data = {this.state.list}
          ItemSeparatorComponent = {this.renderSeparator}
          onEndReachedThreshold = {50}
          refreshing = {this.state.refreshing}
          onRefresh = {this.handleRefresh}
          ListHeaderComponent = {() => (!this.state.list.length ? 
            <Text style= {styles.emptyMessage}>
                Swipe right on a pet{"\n"} for them to show up here
            </Text>  
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
                  this.deleteItem(item.id)
                }
              }
            }]}
            >
            
            <ListItem
              key={item.id}
              avatar = { <Avatar rounded large source = {item.source} /> }
              title={`${item.name}`}
              subtitle={item.breed}
              containerStyle={{ borderBottomWidth: 0 }}
              button onPress ={() => {console.log(item.name)}}
              hideChevron = {true}
              badge={{ 
                element:
                  <Badge 
                    value = {<Image source={require('../images/phone_icon.png')} style = {{width: 40, height: 40, alignContent: 'flex-end', alignSelf: 'center'}}/>}
                    containerStyle = {{ backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', height: 80, paddingTop: 10 }}
                    onPress={() => {console.log('pressed')}}
                />
              }}

            />
          
          </Swipeout>

        )}

        />
    );
  }
}


export default LikedHistory;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
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

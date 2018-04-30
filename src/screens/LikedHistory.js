import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Badge } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import Communications from 'react-native-communications';

import PetProfile from './PetProfile';
import { pets } from '../petsdata.json'

class LikedHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      refreshing: false,
      activeRowId: null,
    };
  }

  onProfilePress = () => {
    this.props.navigation.navigate('PetProfile');
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
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return (
        
        <FlatList
          style = {styles.flatList}
          data = {this.state.list}
          ItemSeparatorComponent = {this.renderSeparator}
          onEndReachedThreshold = {50}
          refreshing = {this.state.refreshing}
          onRefresh = {this.handleRefresh}
          ListHeaderComponent = {() => (!this.state.list.length ?
            <View style = {styles.emptyMessageContainer}>
              <Text style= {styles.emptyMessageTitle}>
                No pets here.
              </Text>
              <Text style = {styles.emptyMessageBody}>
                <B>Swipe right</B> to add your potential fluffy{"\n"}
                mate to this page. Unless you already{"\n"}
                have, in which case: <B>pull to refresh</B>{"\n"}
                to see the list here. 
              </Text>  
            </View>
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
              avatar = { <Avatar rounded large source = {{uri: item.source}} /> }
              title={`${item.name}`}
              subtitle={item.breed}
              containerStyle={{ borderBottomWidth: 0 }}
              button onPress ={this.onProfilePress}
              hideChevron = {true}
              badge={{ 
                element:
                  <Badge 
                    value = {<Image source={require('../images/phone.png')} style = {{width: 40, height: 40, alignContent: 'flex-end', alignSelf: 'center'}}/>}
                    containerStyle = {{ backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', height: 80, paddingTop: 10 }}
                    onPress={() => Communications.phonecall('0123456789', true)}
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
  emptyMessageContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '75%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  emptyMessageTitle: {
    fontSize: 20,
    color: '#989898',
    textAlign: 'center',
  },
  emptyMessageBody: {
    marginTop: 8,
    fontSize: 15,
    color: '#989898',
    textAlign: 'center',
    height: 80
  },
});

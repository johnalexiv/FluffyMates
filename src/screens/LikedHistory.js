import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, Avatar } from 'react-native-elements';

class LikedHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      refreshing: false,
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



  render() {
    return (
        
        <FlatList
          style={styles.flatList}
          data={this.state.list}
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
        ListHeaderComponent={() => (!this.state.list.length ? 
            <Text
              style= {styles.emptyMessage}>
                Swipe right on a pet{"\n"} for them to show up here
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

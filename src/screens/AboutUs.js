import React from 'react';
import { View, StyleSheet,Image, Text, ScrollView} from 'react-native';
import { Constants } from 'expo';
import { Header, Button,Left, Icon } from 'native-base';



export default class AboutUs extends React.Component {
  static navigationOptions = {
    header: null,
  }
  onBackButton = () => {
		this.props.navigation.goBack(null);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Header style = {{backgroundColor: 'white'}} hasTabs = {true} >
        <Left>
        <Button transparent>
        <Icon name="ios-arrow-back" size={40} color="#32a9ba"
          onPress={this.onBackButton}/>
        </Button>
        </Left>
          <Button transparent>
            <Image source={require('../images/FMicon.png')}   style = {styles.headerButton} /*onPress = {}*/ />
          </Button>
        </Header>
        <Text style = {styles.title}>About Us</Text>
        <Text style={{fontSize:20, marginTop:10, textAlignVertical:'center', textAlign: 'center', color: '#4d4d4d'}} >According to the ASPCA, animal shelter overpopulation leads to 1.5 million euthanized animals per year, yet breeders are the top source for animal purchases. Breeders are more expensive and mired in allegations of cruelty and neglect. When purchasing from a breeder, it is unknown whether the conditions are humane. Adopting from shelters is different in that they are qualified and accountable for the treatment of their animals but searching individual shelters can be difficult and time consuming. </Text>
        <Image source={require('../images/cageddogs.jpg')}   style = {{width:250, height: 250, marginLeft:65,}} />

         <Text style={{fontSize:20, marginTop:10, textAlignVertical:'center', textAlign: 'center', color: '#4d4d4d' }}>Our company is a team of individuals passionate about animal care who are dedicated to helping animals around the country find loving forever homes. We are looking to ease the burden and simplify the process of pet adoption in hopes of increasing adoption through shelters. Our goal is to connect you to reputable shelters anywhere in the U.S. through the comfort of your phone. </Text>

        <Image source={require('../images/happydog.jpg')}   style = {{width:250, height: 250, marginLeft:65,}} />

          <Text style={{fontSize:20, marginTop:10, textAlignVertical:'center', textAlign: 'center', color: '#4d4d4d' }}>Let us help you find your fluffy soulmate! Use the app that allows you to connect to the pet of your dreams anywhere in the country. Just log in, create an account, enter the pet you’re looking for and we’ll help you find the perfect addition to your family. With FluffyMates you will instantly connect to loving pets in need of a forever home anywhere in the country for free. Find love, save lives, end cruelty . . . Adopt, Don’t Shop</Text>

            <Image source={require('../images/adoptabledog.jpg')}   style = {{width:250, height: 250, marginLeft:65,}} />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  headerButton:
  {
  width:60,
  height:60,
  marginTop: 0,
  marginRight:150
  },
  title:
  {
      marginTop: 10,
      fontSize: 50,
      textAlign: 'center'
  },


});

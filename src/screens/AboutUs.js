import React from 'react';
import { View, StyleSheet,Image, Text, ScrollView} from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Feather';



export default class AboutUs extends React.Component {
  static navigationOptions = {
    header: null,
  }
  onBackButton = () => {
		this.props.navigation.goBack(null);
  }
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.backContainer}>
            <View style={styles.back}>
                <Icon name="chevron-left" size={40} color="#32a9ba" 
                    onPress={this.onBackButton}/>
            </View>
        </View>

        <ScrollView>

          <Text style = {styles.title}>About Us</Text>
          <Text style={styles.body} >According to the ASPCA, animal shelter overpopulation leads to 1.5 million euthanized animals per year, yet breeders are the top source for animal purchases. Breeders are more expensive and mired in allegations of cruelty and neglect. When purchasing from a breeder, it is unknown whether the conditions are humane. Adopting from shelters is different in that they are qualified and accountable for the treatment of their animals but searching individual shelters can be difficult and time consuming. </Text>
          <Image source={require('../images/cageddogs.jpg')}   style = {styles.image} />
          <Text style={styles.body}>Our company is a team of individuals passionate about animal care who are dedicated to helping animals around the country find loving forever homes. We are looking to ease the burden and simplify the process of pet adoption in hopes of increasing adoption through shelters. Our goal is to connect you to reputable shelters anywhere in the U.S. through the comfort of your phone. </Text>
          <Image source={require('../images/happydog.jpg')}   style = {styles.image} />
          <Text style={styles.body}>Let us help you find your fluffy soulmate! Use the app that allows you to connect to the pet of your dreams anywhere in the country. Just log in, create an account, enter the pet you’re looking for and we’ll help you find the perfect addition to your family. With FluffyMates you will instantly connect to loving pets in need of a forever home anywhere in the country for free. Find love, save lives, end cruelty . . . Adopt, Don’t Shop</Text>
          <Image source={require('../images/adoptabledog.jpg')}   style = {styles.bottomImage} />

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
  container: {
    flex: 1,
    paddingTop: 35,
  },
  back: {
    flex: 1,
  },
  backContainer: {
    height: 45,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  title:{
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center'
  },
  body: {
    fontSize:13,
    marginTop:10,
    marginLeft:15,
    marginRight: 15,
    textAlign:'justify',
    color: '#4d4d4d'
  },
  image: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  bottomImage: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    width: 300,
    height: 300,
    alignSelf: 'center',
  }
});

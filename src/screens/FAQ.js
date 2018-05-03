import React, { Component } from 'react';
import { Constants } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';
import {Header, Button, Left } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Feather';

const ACCOUNTQ = [
  {
    title: 'How do I change my password?',
    content: 'Go to the settings page and click the button \" Change Password.\"',
  },
  {
    title: 'How do I change my e-mail associated with my account?',
    content: 'Go to the settings page and click the button \" Change E-mail Address.\"',
  },
  {
    title: 'How do I delete my account?',
    content: 'Go to the settings page and click the button \" Delete My Account.\"',
  },
  {
    title: 'How can I change my location permissions for the FluffyMates app?',
    content: 'In order to change the location permission settings for FluffyMates, please go into your phone\'s privacy settings and change the location permissions.',
  },
  {
    title: 'How can I change my notifcation permissions for the FluffyMates app?',
    content: 'In order to change the notification permission settings for FluffyMates, please go into your phone\'s notification settings and change the notification permissions.',
  },
];

const FEATUREQ = [
  {
    title: 'What happens when I like a pet?',
    content: 'The pet will be added to your myPets page and saved for you to bookmark their profile.',
  },
  {
    title: 'How do I add a pet to myPets?',
    content: 'Swipe right on a pet or press the like button to add the pet to your myPets page.',
  },
  {
    title: 'How do I delete a pet from myPets? ',
    content: 'Go to your myPets page and swipe left on the pet\'s placard, then press the delete button.',
  },
  {
    title: 'How do I adjust my filter settings?',
    content: 'Click the filter button on the top left of the navigation bar. You can change your filter settings for: distance radius, sex, breed, species, size, and age.',
  },
];

const FLUFFYQ = [
  {
    title: 'Who are we?',
    content: "Just a bunch of animal loving students in Las Vegas. Please click here to see our about us page.",
  },
  {
    title: 'Does it cost money to adopt a pet?',
    content: "Adoption fees vary with each pet and shelter. You can call the shelter through the FluffyMates app and inquire about their fees. FluffyMates is seperate from the shelters and is not liable for any monetary transactions.",
  },
  {
    title: 'How do we select our shelters?',
    content: "We use the RescueGroups.org Pet API.",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : 'center',
    paddingTop: 35,
  }, 

  header: {
    padding: 10,
    flex: 1,
    backgroundColor: '#37B8CB'
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#fff',
  },
  inactive: {
    backgroundColor: '#fff',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4d4d4d',
    marginTop: 15,
    marginBottom: 15,

    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop:0,
    padding: 4,
    textAlignVertical:'center',
    textAlign: 'center',
    backgroundColor: '#37B8CB'
  },
  question: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4d4d4d',
    padding: 10,
  },
  answer: {
    fontSize: 14,
    color: '#4d4d4d',
    textAlign: 'justify',
    marginTop:0,
    paddingBottom:10,
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
});

export default class FAQ extends Component {
  state = {
    activeSection: false,
    fluffySection: false,
    featureSection: false,
    accountSection: false,

    collapsedFluffy: false,
    collapsedFeatures: false,
    collapsedAccount: false,
  };

  onBackButton = () => {
		this.props.navigation.goBack(null);
  }

  static navigationOptions = {
    header: null,
  }

  _toggleExpanded = (section) => {
    switch (section) {
      case 'FluffyMates':
        this.setState({ collapsedFluffy: !this.state.collapsedFluffy })
        break;
      case 'Account':
        this.setState({ collapsedAccount: !this.state.collapsedAccount })
        break;
      case 'Features':
        this.setState({ collapsedFeatures: !this.state.collapsedFeatures })
        break;
      default:
        console.log('idk')
        break;

    }
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderQuestion(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.question, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.question}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={10}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style ={styles.answer}>{section.content}</Text>
      </Animatable.View>
    );
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backContainer}>
            <View style={styles.back}>
                <Icon name="chevron-left" size={40} color="#32a9ba" 
                    onPress={this.onBackButton}/>
            </View>
        </View>

        <ScrollView>
          <Text style={styles.title}>FAQ</Text>

          <TouchableHighlight onPress={this._toggleExpanded.bind(this, 'FluffyMates')}>
            <View style={styles.header}>
              <Text style={styles.subtitle}>FLUFFYMATES</Text>
            </View>
          </TouchableHighlight>

          <Collapsible collapsed={this.state.collapsedFluffy} align="center">
            <View style={styles.content}>
              <Accordion
                fluffySection={this.state.fluffySection}
                sections={FLUFFYQ}
                renderHeader={this._renderQuestion}
                renderContent={this._renderContent}
                duration={400}
                onChange={this._setSection.bind(this)} />
            </View>
          </Collapsible>

          <TouchableHighlight onPress={this._toggleExpanded.bind(this, 'Account')}>
            <View style={styles.header}>
              <Text style={styles.subtitle}>ACCOUNT</Text>
            </View>
          </TouchableHighlight>

          <Collapsible collapsed={this.state.collapsedAccount} align="center">
            <View style={styles.content}>
              <Accordion
                accountSection={this.state.accountSection}
                sections={ACCOUNTQ}
                renderHeader={this._renderQuestion}
                renderContent={this._renderContent}
                duration={400}
                onChange={this._setSection.bind(this)} />
            </View>
          </Collapsible>

          <TouchableHighlight onPress={this._toggleExpanded.bind(this, 'Features')}>
            <View style={styles.header}>
              <Text style={styles.subtitle}>FEATURES</Text>
            </View>
          </TouchableHighlight>

          <Collapsible collapsed={this.state.collapsedFeatures} align="center">
            <View style={styles.content}>
              <Accordion
                featureSection={this.state.featureSection}
                sections={FEATUREQ}
                renderHeader={this._renderQuestion}
                renderContent={this._renderContent}
                duration={400}
                onChange={this._setSection.bind(this)}/>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}
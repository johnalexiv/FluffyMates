import React, { Component } from 'react';
import { Constants } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import {Header, Button, Left, Icon } from 'native-base';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

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
    //justifyContent: 'center',
    backgroundColor: '#fff',
    //paddingTop: Constants.statusBarHeight,
    alignItems : 'center',
  }, 
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  question: {
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#fff',
  },
  inactive: {
    backgroundColor: '#fff',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  back: {
    flex: 1,
    color:  'white',
  },
  backContainer: {
    flex: 0.08,
    flexDirection: 'row',
    color : 'white',
  },
});

export default class FAQ extends Component {
  state = {
    activeSection: false,
    fluffySection: false,
    featureSection: false,
    accountSection: false,
  };

  onBackButton = () => {
		this.props.navigation.goBack(null);
  }

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }
  _renderQuestion(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.question, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
    );
  }



  render() {
    return (
      <View style={styles.container}>

        <Header style = {{backgroundColor: 'white'}} hasTabs = {true} >
          <Left>
            <Button transparent>
              <Icon
                name="ios-arrow-back"
                size={40}
                color="#32a9ba"
                onPress={this.onBackButton}/>
            </Button>
          </Left>
        </Header>

        <Text style={styles.title}>Frequently Asked Questions</Text>

        <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>FluffyMates</Text>
          </View>
        </TouchableHighlight>

        <Collapsible collapsed={this.state.collapsed} align="center">
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

        <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Account</Text>
          </View>
        </TouchableHighlight>

        <Collapsible collapsed={this.state.collapsed} align="center">
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

        <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Features</Text>
          </View>
        </TouchableHighlight>

        <Collapsible collapsed={this.state.collapsed} align="center">
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

      </View>
    );
  }
}
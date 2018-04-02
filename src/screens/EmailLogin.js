import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';
import { Input } from 'react-native-elements';
import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from '../../aws-exports';
Amplify.configure(AWSConfig)

export default class EmailLogin extends React.Component {
    state = {

        email: '',
        confirmationCode: ''
    }

    signUp() {
        Auth.signUp({
          username: this.state.username,
          password: this.state.password,
          attributes: {
            email: this.state.email,
          }
        })
        .then(() => console.log('successful sign up!'))
        .catch(err => console.log('error signing up!: ', err))
      }

    confirmSignUp() {
        Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
        .then(() => console.log('successful confirm sign up!'))
        .catch(err => console.log('error confirming signing up!: ', err))
    }  

    onChangeText(key, value) {
        this.setState({
          [key]: value
        })
    }

    static navigationOptions = {
        title: 'Log into FluffyMates',
    }   

    render() {
        return (
            <View style={styles.container}>
            <TextInput
              onChangeText={value => this.onChangeText('username', value)}
              style={styles.input}
              placeholder='username'
            />
            <TextInput
              onChangeText={value => this.onChangeText('password', value)}
              style={styles.input}
              secureTextEntry={true}
              placeholder='password'
            />

            <TextInput
              onChangeText={value => this.onChangeText('email', value)}
              style={styles.input}
              placeholder='email'
            />
            <Button title="Sign Up" onPress={this.signUp.bind(this)} />
            <TextInput
              onChangeText={value => this.onChangeText('confirmationCode', value)}
              style={styles.input}
              placeholder='confirmation Code'
            />
            <Button title="Confirm Sign Up" onPress={this.confirmSignUp.bind(this)} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    enterNumber: {
        flex: 1,
    },
    input: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#2196F3',
        margin: 10
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
})
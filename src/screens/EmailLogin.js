import React from 'react';
import { 
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from '../../aws-exports';
import { LinearGradient } from 'expo';
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

	onCancelPress = () => {
		this.props.navigation.goBack(null);
	}
	
	static navigationOptions = {
		title: 'Log into FluffyMates',
		header: null,
	}   

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>

				<View style={styles.loginContainer}>
					<Image  style={styles.logo} 
						source={require('../images/FMicon.png')}
						resizeMode="contain" />
				</View>

				<View style={styles.formContainer}>
					<View style={styles.inputFormat}>
						<Icon name="user-o" size={20} color="white" />
						<TextInput style = {styles.input} 
							autoCapitalize="none" 
							autoCorrect={false} 
							returnKeyType="next" 
							placeholder='Username' 
							placeholderTextColor='rgba(225,225,225,0.7)'
							onChangeText={value => this.onChangeText('username', value)}
						/>
					</View>

					<View style={styles.inputFormat}>
						<Icon name="key" size={20} color="white" />
						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('password', value)}
							secureTextEntry={true}
							placeholderTextColor='rgba(225,225,225,0.7)'
							placeholder='Password'
						/>
					</View>

					<View style={styles.inputFormat}>
						<Icon name="envelope" size={20} color="white" />
						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('email', value)}
							placeholder='Email'
							placeholderTextColor='rgba(225,225,225,0.7)' 
						/>
					</View>
					
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={this.signUp.bind(this)}>
							<Text  style={styles.buttonText}>SEND CONFIRMATION CODE</Text>
						</TouchableOpacity> 
					</View>

					<View style={styles.inputFormat}>
						<Icon name="check" size={20} color="white" />
						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('confirmationCode', value)}
							placeholder='Confirmation Code'
							placeholderTextColor='rgba(225,225,225,0.7)' 
						/>
					</View>

					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={this.confirmSignUp.bind(this)}>
							<Text  style={styles.buttonText}>SIGN UP</Text>
						</TouchableOpacity> 
					</View>

					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={this.onCancelPress}>
							<Text  style={styles.buttonText}>CANCEL</Text>
						</TouchableOpacity>
					</View>

				</View>
			</KeyboardAvoidingView>

		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
		// backgroundColor: 'white',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    logo: {
        position: 'absolute',
        width: 350,
        height: 150,
	},
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
		backgroundColor: 'pink',
		flex: 1.8,
		justifyContent: 'center',
		paddingBottom: 10,
	},
	inputFormat: {
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		borderRadius: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		paddingHorizontal: 10,
	},
	input:{
		flex: 1,
		height: 30,
		paddingLeft: 10,
		// backgroundColor: 'rgba(225,225,225,0.2)',
		color: '#fff'
	},
	buttonContainer:{
		backgroundColor: '#2980b6',
		height: 50,
		padding: 5,
		marginHorizontal: 20,
		borderRadius: 50,
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText:{
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	}, 
	loginButton:{
		backgroundColor:  '#2980b6',
		color: '#fff'
	}
});
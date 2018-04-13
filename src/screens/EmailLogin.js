import React from 'react';
import { 
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { Input } from 'react-native-elements';
import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from '../../aws-exports';
import { LinearGradient } from 'expo';
Amplify.configure(AWSConfig)

const onButtonPress = () => {
	Alert.alert('Button has been pressed!');
};

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
					<View style={styles.form}>
						<TextInput style = {styles.input} 
							autoCapitalize="none" 
							autoCorrect={false} 
							returnKeyType="next" 
							placeholder='Username' 
							placeholderTextColor='rgba(225,225,225,0.7)'
							onChangeText={value => this.onChangeText('username', value)}
							/>

						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('password', value)}
							secureTextEntry={true}
							placeholderTextColor='rgba(225,225,225,0.7)'
							placeholder='Password'
						/>

						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('email', value)}
							placeholder='Email'
							placeholderTextColor='rgba(225,225,225,0.7)' 
						/>
						<TouchableOpacity style={styles.buttonContainer} onPress={this.signUp.bind(this)}>
                    		<Text  style={styles.buttonText}>SEND CONFIRMATION CODE</Text>
                		</TouchableOpacity> 

						<TextInput style={styles.inputSignUp}
							onChangeText={value => this.onChangeText('confirmationCode', value)}
							placeholder='Confirmation Code'
							placeholderTextColor='rgba(225,225,225,0.7)' 
						/>

						<TouchableOpacity style={styles.buttonContainer} onPress={this.confirmSignUp.bind(this)}>
                    		<Text  style={styles.buttonText}>SIGN UP</Text>
                		</TouchableOpacity> 

					</View>

				</View>

			</KeyboardAvoidingView>

			// <View style={styles.container}>
			// 	{/* <View style={styles.imageWindow}>
			// 	<Image style={styles.image}
			// 		source={require('../images/FMicon.png')}
			// 		resizeMode="contain"
			// 	/>
			// 	</View> */}
			// 	<View style={styles.inputs}>
				// <TextInput
				// 	onChangeText={value => this.onChangeText('username', value)}
				// 	style={styles.input}
				// 	placeholder='username'
				// />
				// <TextInput
				// 	onChangeText={value => this.onChangeText('password', value)}
				// 	style={styles.input}
				// 	secureTextEntry={true}
				// 	placeholder='password'
				// />

				// <TextInput
				// 	onChangeText={value => this.onChangeText('email', value)}
				// 	style={styles.input}
				// 	placeholder='email'
				// />

			// 	{/* <Button title="Sign Up" onPress={this.signUp.bind(this)} /> */}
				// <TextInput
				// 	onChangeText={value => this.onChangeText('confirmationCode', value)}
				// 	style={styles.input}
				// 	placeholder='confirmation Code'
				// />

				

			// 	{/* <Button title="Confirm Sign Up" onPress={this.confirmSignUp.bind(this)} /> */}
			// 	</View>
			// </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 500,
        height: 200,
	},
	form: {
		flex: 1,
	},
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
        flex: 1,
    },
	input:{
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		marginBottom: 10,
		padding: 10,
		color: '#fff'
	},
	inputSignUp: {
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		marginTop: 15,
		marginBottom: 10,
		padding: 10,
		color: '#fff'
	},
	buttonContainer:{
		backgroundColor: '#2980b6',
		marginBottom: 10,
		paddingVertical: 15
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
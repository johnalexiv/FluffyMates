import React from 'react';
import { 
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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
		// title: 'Log into FluffyMates',
		// header: null,
	}   

	render() {
		return (
			// <ImageBackground
			// source={require('../images/corgi.jpg')}
			// resizeMode='cover'
			// blurRadius={5} 
        	// style={styles.testcontainer}>
			<KeyboardAvoidingView behavior="padding" style={styles.container}>

				<View style={styles.loginContainer}>
					<Image  style={styles.logo} 
						source={require('../images/FMicon2.png')}
						resizeMode="contain" />
				</View>

				<View style={styles.formContainer}>
					<View style={styles.inputFormat}>
						<Icon name="user" size={22} color="black" />
						<TextInput style = {styles.input} 
							autoCapitalize="none" 
							autoCorrect={false} 
							keyboardType="ascii-capable" 
							returnKeyType="next"
							placeholder='Username' 
							placeholderTextColor='rgba(225,225,225,0.8)'
							onChangeText={value => this.onChangeText('username', value)}
						/>
					</View>

					<View style={styles.inputFormat}>
						<Icon name="lock" size={20} color="black" />
						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('password', value)}
							autoCapitalize="none"
							keyboardType="ascii-capable" 
							autoCorrect={false}
							returnKeyType="next"
							secureTextEntry={true}
							placeholderTextColor='rgba(225,225,225,0.8)'
							placeholder='Password'
						/>
					</View>

					{/* <View style={styles.inputFormat}>
						<Icon name="mail" size={20} color="black" />
						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('email', value)}
							autoCapitalize="none" 
							keyboardType="email-address" 
							autoCorrect={false} 
							placeholder='Email'
							placeholderTextColor='rgba(225,225,225,0.8)' 
						/>
					</View> */}
					
					{/* <View style={styles.viewSignupButton}>
						<TouchableOpacity style={styles.signupButton} onPress={this.signUp.bind(this)}>
							<LinearGradient
								colors={['#1CB5E0', '#37b8cb',]}
								style={{ padding: 12, alignItems: 'center', borderRadius: 50 }}
								start={{ x: 0, y: 1 }}
								end={{ x: 1, y: 1 }}>
								<Text style={{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 12}} >
									SEND CONFIRMATION CODE
								</Text>
							</LinearGradient>
						</TouchableOpacity> 
					</View>

					<View style={styles.inputFormat}>
						<Icon name="check" size={20} color="black" />
						<TextInput style={styles.input}
							onChangeText={value => this.onChangeText('confirmationCode', value)}
							autoCapitalize="none" 
							keyboardType="ascii-capable" 
							autoCorrect={false} 
							placeholder='Confirmation Code'
							placeholderTextColor='rgba(225,225,225,0.8)' 
						/>
					</View> */}

					<View style={styles.viewSignupButton}>
						<TouchableOpacity style={styles.signupButton} onPress={this.confirmSignUp.bind(this)}>
							<LinearGradient
								colors={['#1CB5E0', '#37b8cb',]}
								style={{ padding: 15, alignItems: 'center', borderRadius: 50 }}
								start={{ x: 0, y: 1 }}
								end={{ x: 1, y: 1 }}>
								<Text style={{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 12}} >
									SIGN UP
								</Text>
							</LinearGradient>
						</TouchableOpacity> 
					</View>

					{/* <View style={styles.viewSignupButton}>
						<TouchableOpacity style={styles.signupButton} onPress={this.onCancelPress}>
							<LinearGradient
								colors={['#1CB5E0', '#37b8cb',]}
								style={{ padding: 15, alignItems: 'center', borderRadius: 50 }}
								start={{ x: 0, y: 1 }}
								end={{ x: 1, y: 1 }}>
								<Text style={{backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: 12}} >
									CANCEL
								</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View> */}

				</View>
			</KeyboardAvoidingView>
			// </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	testcontainer: {
		flex: 1,
	},
	container: {
        flex: 1,
        backgroundColor: 'white',
	},
	signupButton: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderRadius: 50,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {width: 2, height: 2},
	},
	viewSignupButton: {
		height: 50,
        justifyContent: 'flex-start',
		paddingHorizontal: 15,
		marginTop: 15,
		margin: 3,
    },
    loginContainer:{
		// backgroundColor: 'pink',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    logo: {
        position: 'absolute',
        width: 350,
        height: 270,
	},
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
		flex: 1.2,
		justifyContent: 'flex-start',
		paddingBottom: 10,
	},
	inputFormat: {
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.4)',
		borderRadius: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		margin: 5,
		paddingHorizontal: 10,
	},
	input:{
		flex: 1,
		height: 30,
		paddingLeft: 10,
		// backgroundColor: 'rgba(225,225,225,0.2)',
		color: 'black'
	},
});
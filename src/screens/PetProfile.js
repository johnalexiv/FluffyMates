import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Button,
    ScrollView,
} from 'react-native';
import Profile from '../components/PetProfile/Profile.js';
import Icon from 'react-native-vector-icons/Feather';
export default class PetProfile extends React.Component {
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
                <View  style={styles.swipeView}>           
                    <Profile
                        name = {this.props.navigation.state.params.passedData.name}
                        breed = {this.props.navigation.state.params.passedData.breed}
                        distance = {this.props.navigation.state.params.passedData.distance}
                        source = {this.props.navigation.state.params.passedData.source}
                    />
                    
                </View>
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
    },
    swipeView: {
        flex: 1,
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


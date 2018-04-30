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
import { pets } from '../petsdata.json'

export default class PetProfile extends React.Component {
    static navigationOptions = {
        header: null,
    }

    onBackButton = () => {
		this.props.navigation.goBack(null);
     }



    generatePetData() {
        var petData = null
        let id = this.props.navigation.state.params.passedData
        let species = id.charAt(0)

        switch (species) {
            case 'C':
                petData  = this.returnArrayElementById(pets.cats, id);
                break;

            case 'D':
                petData = this.returnArrayElementById(pets.dogs, id);
                break;

            default:
                petData = 'default'
                break;
        }

        return (petData);
    }

    returnArrayElementById(array, id) {
        let index = array.findIndex(function(array) {
            return array.id === id; 
        })
        return (array[index]);
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
                        petInfo = {this.generatePetData()}
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
    test: {
        flex: 1,
    },
    swipeView: {
        flex: 1,
    },
    tabView: {
        flex: 1,
        padding: 10,
    },
    sampleCard: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
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


import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Image,
} from 'react-native';

export default class FilterCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textWindow}>
                    <Text style={styles.text}> 
                        Liked pets will appear on {"\n"}
                        your MyPets page
                    </Text>
                </View>

                <View style={styles.imageWindow}>
                    <Image style={styles.image}
                        source={require('../../images/myPetsPage.png')}
                        resizeMode="contain"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textWindow: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,  
    },
    text: {
        flex: 1,
        textAlign: 'center',
        color: '#606060',
        fontSize: 22,
        paddingHorizontal: 30,
        shadowColor: 'black',
        shadowOpacity: 0.05,
        shadowRadius: 1,
        shadowOffset: {width: 1, height: 1},
    },
    imageWindow: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {width: 2, height: 2},
    },
    image: {
        flex: 0.9,
    },
})
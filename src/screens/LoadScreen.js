import React from 'react';
import { 
    StyleSheet, 
    View,
    Image,
    Text,
} from 'react-native';

export default class LoadScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.contrain}>
            </View>
            <View style={styles.imageWindow}>
                <Image style={styles.image}
                    source={require('../images/FMicon.png')}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.contrain}>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageWindow: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
    },
    contrain: {
        flex: 5,
    },
});

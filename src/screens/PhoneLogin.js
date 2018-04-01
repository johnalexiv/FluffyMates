import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class PhoneLogin extends React.Component {
    static navigationOptions = {
        title: 'Log into FluffyMates',
    }   

    render() {
        return (
            <View style={styles.enterNumber}>
                <Text> Enter your mobile number </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    enterNumber: {
        flex: 1,
    },
})
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import NavigationBar from '../components/Main/NavigationBar';
import SwipeCards from '../components/Main/SwipeCards';
import ChoiceButtons from '../components/Main/ChoiceButtons';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <NavigationBar/>
            </View>
            <View style={styles.swipeCards}>
                <SwipeCards/>
            </View>
            <View style={styles.choiceButtons}>
                <ChoiceButtons/>
            </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    navigationBar: {
        flex: 1.5,
    },
    swipeCards: {
        flex: 10,
    },
    choiceButtons: {
        flex: 1.5,
    }
});

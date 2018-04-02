import React from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    Image,
} from 'react-native';
import Root from './src/config/Router';
import Loading from './src/screens/Loading';
import LoadScreen from './src/screens/LoadScreen';

export default class App extends React.Component {
    state = {
        loaded: false
    }
    constructor() {
        super();
        Loading.load(v => this.setState({loaded: true}));
    }
    render() {
        return (
        <View style={styles.container}>
            {this.state.loaded ? <Root/> : <LoadScreen />}
            {/* <Root /> */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Button,
    ScrollView,
} from 'react-native';
import SwipeCards from '../components/Main/SwipeCards';
import ChoiceButtons from '../components/Main/ChoiceButtons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                initialPage={1}
                tabBarPosition='top'
                locked={true}
            >
                <ScrollView tabLabel="ios-filters" style={styles.tabView}>                    
                    <View style={styles.sampleCard}>
                        <Text>Filter</Text>
                    </View>
                </ScrollView>

                <View tabLabel="ios-paw" style={styles.swipeView}>
                    <SwipeCards/>
                </View>

                <ScrollView tabLabel="ios-heart" style={styles.tabView}>
                    <View style={styles.sampleCard}>
                        <Text>MyPets</Text>
                    </View>
                </ScrollView>

            </ScrollableTabView>
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
});

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
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import "prop-types";
import LikedHistory from '../components/LikedHistory/LikedHistory';
//import Settings from '../components/Settings/Settings';
import Settings from './Settings';
import TabBar from './tabBar';
import Filters from '../components/filters/filters';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
    }
    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                initialPage={2}
                tabBarPosition='top'
                locked={true}
                tabBarActiveTextColor = {'#37B8CB'}
                tabBarInactiveTextColor = {'darkgray'}
                renderTabBar={() => <TabBar />}>
            <View tabLabel='ios-construct' style={styles.tabView}>
            <View style={styles.sampleCard}>
                        <Settings/>
                    </View>
            </View>
                <ScrollView tabLabel= 'md-options' style={styles.tabView}>
                    <View style={styles.sampleCard}>
                      <Filters/>
                      </View>
                </ScrollView>

                <View tabLabel="ios-paw" style={styles.swipeView}>
                    <SwipeCards/>
                </View>

                <View tabLabel="ios-heart" style={styles.tabView}>
                    <View style={styles.sampleCard}>
                        <LikedHistory/>
                    </View>
                </View>

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
    }
});

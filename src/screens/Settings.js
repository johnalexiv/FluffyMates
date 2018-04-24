import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Button,
    ScrollView,
} from 'react-native';
import Settings from '../components/Settings/Settings.js';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
//import Icon from 'react-native-vector-icons';
import { Icon, Container, Content } from 'native-base'; // Version can be specified in package.json
export default class PetProfile extends React.Component {
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
                <ScrollView tabLabel="ios-arrow-back" style={styles.tabView}>                    
                    <View style={styles.sampleCard}>
                        <Text>Back</Text>
                    </View>
                </ScrollView>

                <View tabLabel="Settings" style={styles.swipeView}>
                    <Settings/>
                </View>

                <ScrollView tabLabel="" style={styles.tabView}>
             
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


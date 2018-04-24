import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Swiper from 'react-native-swiper';
import DiscoverCard from './DiscoverCard';
import SwiperCard from './SwiperCard';
import FilterCard from './FilterCard';

export default class LoginSwiper extends React.Component {
    render() {
        return (
            <Swiper style={styles.container}
                showsButtons={false}
                dot={<View style={{
                    backgroundColor:'rgba(0,0,0,.2)', 
                    width: 7, 
                    height: 7,       
                    borderRadius: 4, 
                    marginLeft: 8, 
                    marginRight: 8, 
                    marginTop: 5, 
                    marginBottom: 0,}} 
                />}
                activeDot={<View style={{
                    backgroundColor:'#32a9ba', 
                    width: 10, 
                    height: 10,       
                    borderRadius: 5, 
                    marginLeft: 8, 
                    marginRight: 8, 
                    marginTop: 5, 
                    marginBottom: 0,}} 
                />}
                autoplayTimeout={5}>

                <View style={styles.card}>
                    <DiscoverCard />
                </View>

                <View style={styles.card}>
                    <SwiperCard />
                </View>

                <View style={styles.card}>
                    <FilterCard />
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    card: {
        flex: 1,
        paddingBottom: 30,
    },
})
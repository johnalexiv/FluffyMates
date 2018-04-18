// SwipeCards.js
'use strict';
 
    import React, { Component } from 'react'
    import { Image, View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native'
    import { Icon, Container, Content } from 'native-base'; // Version can be specified in package.json

import SwipeCards from 'react-native-swipe-cards';

import colors                       from '../../style/colors.js'
import Swiper                       from 'react-native-swiper'

const images = [
    'https://image.ibb.co/gpzgtH/1.jpg',
    'https://image.ibb.co/eshefx/2.jpg',
    'https://image.ibb.co/iLHO7c/3.jpg',
    'https://image.ibb.co/eXugtH/4.jpg'
]

const tags = [
    'House-trained', 'Neutered', 'Vaccinations OK', 'Pet friendly', 'Child friendly', 'Shiba Inu', 'Dog', 'Puppy'
]

const {width} = Dimensions.get('window')
const imgHeight = 400;

export default class Profile extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    { this.renderSwiper() }
                    { this.renderInfo() }
                    { this.renderInfo2() }
                    { this.renderDescription() }
                    
                    { this.renderShelter() }
                    { this.renderTags() }
                </Content>
            </Container>
        )
    }

    // for the pet profile images
    renderSwiper() {
        return (
            <Swiper width={width} height={imgHeight}
                removeClippedSubviews={false}
                dotColor='#848288'
                activeDotColor={colors.txtMainBlue}
                paginationStyle={{
                    top: -330, left: null, right: (width / 2) - 20
                }} loop={true}>
                    {
                        images.map((uri, idx) => {
                           return (
                               <Image key={idx} style={{ width: width, height: imgHeight }} source={{ uri: uri }} />
                           )
                        })
                    }
            </Swiper>
        )
    }

    // for the pet's name, age, breed, distance away
    renderInfo() {
        return (
            <View style={styles.holder}>
                <Text style={styles.petName}>Miroku, 1</Text>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-paw-outline" />
                    <Text style={styles.info}>Breed: Shiba Inu</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-locate-outline" />
                    <Text style={styles.info}>Location: 2 miles away</Text>
                </View>
            </View>
        )
    }
    
    // for the pet's generic age, sex, and size
    renderInfo2() {
        return (
            <View style={styles.holder}>
                <View style={styles.infoRow}>
                    <Text style={styles.info2}>Puppy · Male · Medium</Text>
                </View>
            </View>
        )
    }

    // for the pet bio
    renderDescription() {
        return (
            <View style={styles.holder}>
                <Text style={styles.info}>
                    If you're into bad boys, swipe left because I am a good boy.
                </Text>
            </View>
        )
    }
    
    // for the information about the pet shelter
    renderShelter() {
        return (
            <View style={styles.holder}>
            
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-home-outline" />
                    <Text style={styles.info}>Shelter: Name of Shelter</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-call-outline" />
                    <Text style={styles.info}>Phone #: (123) 456-7890</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-map-outline" />
                    <Text style={styles.info}>Address:</Text>
                    <Text style={styles.info}> Address here</Text>
                </View>
            </View>
        )
    }

    // for the pet's tags, can be found in the filter settings?
    renderTags() {
        const items = tags.map((item, idx) => {
            return (
                <View key={idx} style={styles.tag}>
                    <Text style={styles.tagLabel}>{item}</Text>
                </View>
            )
        })
        return (
            <View style={styles.holder}>
                <Text style={styles.headerTitle}>{tags.length} Tags</Text>
                <View style={ styles.tagContainer }>
                    {items}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff'
    },
    holder: {
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    petName: {
        fontSize: 20,
        marginBottom: 10
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoIcon: {
        color: colors.txtDescription,
        fontSize: 20,
        marginRight: 10
    },
    info: {
        fontSize: 16,
        color: colors.txtDescription
    },
    info2: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.txtDescription
    },
    headerTitle: {
        fontSize: 16
    },
    tagContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.txtMainBlue,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10
    },
    tagLabel: {
        color: colors.txtMainBlue
    }
})

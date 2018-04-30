// SwipeCards.js
'use strict';
 
    import React, { Component } from 'react'
    import { Image, View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native'
    import { Icon, Container, Content } from 'native-base'; // Version can be specified in package.json
    import { pets } from '../../petsdata.json'
    import SwipeCards from 'react-native-swipe-cards';

    import colors                       from '../../style/colors.js'
    import Swiper                       from 'react-native-swiper'

export default class PetProfile extends Component {
    static navigationOptions = {
        tabBarVisible: false
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
          
                    { this.renderSwiper() }
                    { this.renderInfo() }
                    { this.renderInfo2() }
                    { this.renderShelter() }
                    { this.renderTags() }
                </Content>
            </Container>
        )
    }

    // for the pet profile images
    renderSwiper() {
        return (
            <Image style={{width: 375, height: 400,  }} 
            source = {{ uri: pets.dogs[0].photo }}  />
        )
    }

    // for the pet's name, age, breed, distance away
    renderInfo() {
        return (
            <View style={styles.holder}>
                <Text style={styles.petName}>{pets.dogs[0].name}</Text>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-paw-outline" />
                    <Text style={styles.info}>Breed: {pets.dogs[0].breed}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-locate-outline" />
                    <Text style={styles.info}>Location:  {pets.dogs[0].radius} miles away</Text>
                </View>
            </View>
        )
    }
    
    // for the pet's generic age, sex, and size
    renderInfo2() {
        return (
            <View style={styles.holder}>
                <View style={styles.infoRow}>
                    <Text style={styles.info2}>{pets.dogs[0].age} · {pets.dogs[0].sex} · {pets.dogs[0].size}</Text>
                </View>
            </View>
        )
    }

    
    // for the information about the pet shelter
    renderShelter() { 
        return (
            <View style={styles.holder}>
            
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-home-outline" />
                    <Text style={styles.info}>Shelter: {pets.dogs[0].shelter}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-call-outline" />
                    <Text style={styles.info}>Phone #: {pets.dogs[0].phone}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-map-outline" />
                    <Text style={styles.info}>Address:</Text>
                </View>
                    <View style={styles.infoRow}>
                    <Text style={styles.info}> {pets.dogs[0].address}</Text>
                </View>
                    <View style={styles.infoRow}>
                    <Text style={styles.info}> {pets.dogs[0].city}</Text>
                </View>
            </View>
        )
    }

    // for the pet's tags, can be found in the filter settings?
    renderTags() {
        return (
            <View style={styles.holder}>
                <Text style={styles.headerTitle}>More Info:</Text>
                <View style={ styles.tagContainer }>
                <View style={styles.tag}>
                    <Text style={styles.tagLabel}>{pets.dogs[0].health}</Text>
                </View>
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

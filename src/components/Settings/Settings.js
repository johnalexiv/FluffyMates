// SwipeCards.js
'use strict';
 
    import React, { Component } from 'react'
    import { Button, Image, View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native'
    import { Icon, Container, Content } from 'native-base'; // Version can be specified in package.json

    import colors                       from '../../style/colors.js'
    import Swiper                       from 'react-native-swiper'

const {width} = Dimensions.get('window')
export default class PetProfile extends Component {
    static navigationOptions = {
        tabBarVisible: false
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
          
                    { this.renderLinks() }
                    { this.renderChange() }
                </Content>
            </Container>
        )
    }

    // for the pet profile images
    renderLinks() {
        return (
            <View style={styles.holder}>
                <Button
                    //onPress={onPressLearnMore}
                    title="About Us"
                    color="#37B8CB"
                    />
            </View>
        )
    }

    // for the pet's name, age, breed, distance away
    renderChange() {
        return (
            <View style={styles.holder}>
               
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

import React from 'react'

export default class PetList extends React.Component {
    
    HasPictureFilter = {
        'fieldName': 'locationCity',
        'operation': 'contains',
        'criteria': 'Las Vegas'
    }

    FieldsRequested = [
        'animalID',
        'animalPictures',
        'animalName',
        'animalBirthdate',
        'animalBreed',
        'animalDescription',
        
    ]

    filterList = {
    }

    SearchInformation = {
        'resultStart' : '0',
        'resultLimit' : '100',
        'resultSort' : 'sdfsdf',
        'resultOrder' : 'asc',
        'filters' : filterList,
        'fields' : FieldsRequested
    }

    FilterInformation = {
        'apiKey' : '{DADouZ0t}',
        'objectType' : 'animal',
        'objectAction' : 'publicSearch',
        'search': SearchInformation
    }

    PostInformation = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(FilterInformation)
    }

    GetInformation() {
        fetch('https://test-api.rescuegroups.org/http/v2.json', PostInformation)
    }
}
var RescuePetsAPI = {
    GetInformation() {
        var HasPictureFilter = {
            'fieldName': 'locationCity',
            'operation': 'contains',
            'criteria': 'Las Vegas'
        }

        var FieldsRequested = [
            'animalID',
            'animalPictures',
            'animalName',
            'animalBirthdate',
            'animalBreed',
            'animalDescription',
            'animalLocation'
        ]

        var filterList = {
            HasPictureFilter
        }

        var SearchInformation = {
            'resultStart': 0,
            'resultLimit': 1,
            'resultSort': 'animalID',
            'resultOrder': 'asc',
            'filters': filterList,
            'fields': FieldsRequested
        }

        var FilterInformation = {
            'apikey': 'DADouZ0t',
            'objectType': 'animals',
            'objectAction': 'publicSearch',
            'search': SearchInformation
        }

        var PostInformation = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(FilterInformation)
        }

        return JSON.stringify(PostInformation);
    }
}


module.exports = RescuePetsAPI;
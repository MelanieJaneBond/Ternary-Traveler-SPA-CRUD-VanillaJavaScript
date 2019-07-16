function addNewPlace(newPlaceForm) {
    return fetch("http://localhost:8088/trip", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPlaceForm)
    })
}

const nationsData = {
    getDataFromJson : function(placeId) {
    return fetch(`http://localhost:8088/nation?placeId=${placeId}`)
    .then(nationsData => nationsData.json())
}
}

export {addNewPlace, nationsData}
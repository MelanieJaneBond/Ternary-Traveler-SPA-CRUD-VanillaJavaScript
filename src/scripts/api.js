function addNewPlace(newPlaceForm) {
    return fetch("http://localhost:8080/trip", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPlaceForm)
    })
}

function grabNationsData() {
    return fetch("http://localhost:8080/nation")
    .then(nationsData => nationsData.json())
}

export {addNewPlace, grabNationsData}
function addNewPlace(newPlaceForm) {
    return fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newMessage)
})
}

export {addNewPlace}
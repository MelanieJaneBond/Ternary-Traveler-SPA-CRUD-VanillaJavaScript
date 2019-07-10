import { addNewPlace } from "./api.js"

//I think the producing function will need some numerical components, 
//the split thing or...
//some way of differentiating between each item in the array.

function makeRadioButtons () {
    nations.forEach(one => {
        return `
        <input id="${one.id}" type="radio" name="nation" value="${one.name}">
        <label for="${one.id}">${one.name}</label>
        `
})
}

function newArticleForm () {
    return `
    <input type="text" id="name-of-place" placeholder="name of place">
    <input type="text" id="description" placeholder="describe it">
    <input type="number" id="price" placeholder="how much will the trip cost?">
    <input type="text" id="review" placeholder="tell us what it was like to go!">
    <input type="submit" id="submit-input" value="Submit">
    `
}

document.getElementById("submit-input").addEventListener("click", () => {
    let nameOfPlace = document.getElementById("name-of-place").value
    let descriptionOfPlace = document.getElementById("description").value
    let priceOfTrip = document.getElementById("price").value
    let reviewOfTrip = document.getElementById("reivew").value
    let createNewArticleObject = createNewArticle(radioSelect, nameOfPlace, descriptionOfPlace, priceOfTrip, reviewOfTrip)
    addNewPlace(createNewArticleObject)
    })
}
//figure out how to get the radio button select into the createObject function

function createNewArticle (radioSelect, place, description, price, review) {
    return {
        nationId: parseInt(radioSelect),
        placeToGo: place,
        description: description,
        cost: parseInt(price),
        review: review
    }
}

export {makeRadioButtons, newArticleForm, createNewArticle}
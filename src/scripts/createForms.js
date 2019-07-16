import { addNewPlace, nationsData } from "./api.js"

let articleContainer = document.getElementById("container2")
let tripDetails = document.getElementById("tripDetails")
function newArticleForm (id) {
    return `
    <select id="nation">
        <option value="Italy">Italy</option>
        <option value="Switzerland">Switzerland</option>
        <option value="France">France</option>
    </select>
    <input type="text" id="name-of-place" placeholder="name of place">
    <input type="text" id="description" placeholder="describe it">
    <input type="number" id="price" placeholder="how much will it cost?">
    <input type="text" id="review" placeholder="tell us what it was like!">
    <input type="submit" id="submit-input" value="Submit">
    `
}
function putArticleInDom() {
    document.getElementById("submit-input").addEventListener("click", () => {
    let nation = document.getElementById("nation").value
    let nameOfPlace = document.getElementById("name-of-place").value
    let descriptionOfPlace = document.getElementById("description").value
    let priceOfTrip = document.getElementById("price").value
    let reviewOfTrip = document.getElementById("review").value
    let tripInfoDiv = document.createElement("div")
    tripInfoDiv.innerHTML += `In ${nation}, I went to ${nameOfPlace}. It cost ${priceOfTrip}. Here's what it was like... ${descriptionOfPlace}, and, here's what I thought of the experience... ${reviewOfTrip}`
    tripDetails.appendChild(tripInfoDiv)
    let newArticleObject = createNewArticle(nation, nameOfPlace, descriptionOfPlace, priceOfTrip, reviewOfTrip);
    addNewPlace(newArticleObject)
})
}
function createNewArticle (nation, place, description, price, review) {
    return {
        nationId: parseInt(nation),
        placeToGo: place,
        description: description,
        cost: parseInt(price),
        review: review
    }
}

//Ok, I got it to show the nation based on the VALUE I gave each html element. Is this really the best way to do it?
//No. Joe showed us a way to do it that would apply to any number of "nations" in the API.
//I understand that his way is more "helpful" but I still feel that I learned something from doing it this way.
//I'll push this up and come back later to find a way to get the posted articles to remain saved as they do on my
//nutshell project dashboard.

export { newArticleForm, createNewArticle, putArticleInDom}
import { addNewPlace, grabNationsData } from "./api.js"

let articleContainer = document.getElementById("container2")
let tripDetails = document.getElementById("tripDetails")

function newArticleForm () {
    return `
    <select id="nation">
        <option value="1">Italy</option>
        <option value="2">Switzerland</option>
        <option value="3">France</option>
    </select>
    <input type="text" id="name-of-place" placeholder="name of place">
    <input type="text" id="description" placeholder="describe it">
    <input type="number" id="price" placeholder="how much will the trip cost?">
    <input type="text" id="review" placeholder="tell us what it was like to go!">
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
    let nationDetail = document.createElement("li")
    let placeDetail = document.createElement("li")
    let dDetail = document.createElement("li")
    let priceDetail = document.createElement("li")
    let rDetail = document.createElement("li")
    tripDetails.appendChild(nationDetail)
    tripDetails.appendChild(placeDetail)
    tripDetails.appendChild(dDetail)
    tripDetails.appendChild(priceDetail)
    tripDetails.appendChild(rDetail)
    let createNewArticleObject = createNewArticle(nation, nameOfPlace, descriptionOfPlace, priceOfTrip, reviewOfTrip)
    addNewPlace(createNewArticleObject)
})
}

function createNewArticle (nation, place, description, price, review) {
    return {
        nationId: nation,
        placeToGo: place,
        description: description,
        cost: parseInt(price),
        review: review
    }
}

export { newArticleForm, createNewArticle, putArticleInDom}
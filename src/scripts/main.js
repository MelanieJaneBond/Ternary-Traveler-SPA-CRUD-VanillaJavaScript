import { newArticleForm, putArticleInDom } from "./createForms.js"

let placeForPlaces = document.getElementById("container")
function insertHTML () {
placeForPlaces.innerHTML += (newArticleForm())
}
insertHTML()
putArticleInDom()
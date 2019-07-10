import { makeRadioButtons, newArticleForm } from "./createForms.js"

let placeForPlaces = document.getElementById("container")
placeForPlaces.innerHTML += (makeRadioButtons() + newArticleForm())

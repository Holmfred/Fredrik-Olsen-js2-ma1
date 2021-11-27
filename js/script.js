import { createHTML } from "./ui/createHTML.js";
import { searchPrice } from "./ui/searchPrice.js";
import { displayError } from "./ui/displayMessage.js";
const url = "https://fakestoreapi.com/products/"

async function getItems() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        
        console.log(results);
        createHTML(results)
        priceSearch(results)

        
    } catch (error) {
        console.log(error);
            displayError("error", error, ".item-container")
    }
}

getItems();









import { createHTML } from "./createHTML.js";
import { displayError } from "./displayMessage.js";

export function searchPrice (items) {

    const search = document.querySelector(".search");

    search.onkeyup = function(event) {
        console.log(event)
    
        const searchValue = event.target.value.trim();

        const filteredPrice = items.filter(function(item) {
            if(item.price <= searchValue) {
                return true
            }
            
        })

        createHTML(filteredPrice)
    };
}
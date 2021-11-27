import { createHTML } from "./createHTML.js";

export function searchPrice (item) {

    const search = document.querySelector(".search");

    search.onkeyup = function(event) {
        console.log(event)
    
        const searchValue = event.target.value.trim();

        const priceFilter = items.price.filter(function(item) {
            if(searchValue < 50) {
                return true
            }
        })
        
        console.log(searchValue)

    };

    createHTML();
    
}
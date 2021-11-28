import { getExistingFavs } from "../utils/favFunctions.js";

const favourites = getExistingFavs();

export function createHTML(results) {
    const itemContainer = document.querySelector(".item-container")
    itemContainer.innerHTML = "";
    
    results.forEach(function(item){

        itemContainer.innerHTML += `<div class="item">
                                        <h4>${item.title}</h4>
                                        <p>${item.price}$</p>
                                        <i class="far fa-heart" data-id="${item.id}" data-name="${item.title}"></i>
                                    </div>`;
    })
}

const favButtons = document.querySelectorAll(".item i")

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.title;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function(fav){
        return fav.id === id;
    });

    if(!productExists === undefined) {
        const product = { id: id, name: name};
        currentFavs.push(product);
        saveFavs(currentFavs);
    }
    else {
        const newFavs = currentFavs.filter(fav => fav.id !== id) 
        saveFavs(newFavs)
    }

    
}


function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}

import { getExistingFavs } from "../utils/favFunctions.js";

const favourites = getExistingFavs()

const itemContainer = document.querySelector(".item-container")

if (favourites.length === 0) {
    productContainer.innerHTML = "Nothing in Wishlist yet";
}

favourites.forEach((favourite) => {
    itemContainer.innerHTML += `<div class="item">
                                    <h4>${favourite.title}</h4>
                                    <p>${favourite.price}$</p>
                                    <i class="fa fa-heart"></i>
                                </div>`;
});
export function createHTML(results) {
    const itemContainer = document.querySelector(".item-container")
    itemContainer.innerHTML = "";
    
    results.forEach(function(item){

        itemContainer.innerHTML += `<div class="item"
                                        <h2>${item.title}</h2>
                                        <p>${item.price}$</p>
                                        <button>Add to Wishlist</button>
                                    </div>`
    })
}
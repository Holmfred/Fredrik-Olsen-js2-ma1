export function createHTML(results) {
    const itemContainer = document.querySelector(".item-container")
    
    results.forEach(function(item){

        itemContainer.innerHTML += `<div class="items"
                                        <h2>${item.title}</h2>
                                        <p>${item.price}$</p>
                                    </div>`
    })
}
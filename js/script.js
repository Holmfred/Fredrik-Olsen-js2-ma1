const url = "https://fakestoreapi.com/"


async function getStuff(){

    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)
        createHTML(results)
    }

    catch(error){
        console.log(error);
    }
}

getStuff()
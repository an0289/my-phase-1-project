function grabById(id) {
    return document.getElementById(id)
}

document.getElementById("toggle").addEventListener("click", function() {
    if (grabById("container").classList.contains("closed")) {
     grabById("container").classList.remove("closed")
    } else {
     grabById("container").classList.add("closed")
    }
 } )

//Fetch function to find drinks by their name
function getDrinksByName(drinkName) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        })
    }

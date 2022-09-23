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
        data.drinks.forEach(drinkName => {
            renderRecipeCard(drinkName)
        })
        console.log(data)
        })
    }



    //Function to place the grabbed data into the card 
    function renderRecipeCard(drinkInfo) {
    //const image = document.createElement('img')
    //image.setAttribute('class', 'drink_image')
    const title = document.querySelector(".title")
    const ingredient1 = document.querySelector('.amount_ingredient1')
    const ingredient2 = document.querySelector('.amount_ingredient2')
    const ingredient3 = document.querySelector('.amount_ingredient3')
    const ingredient4 = document.querySelector('.amount_ingredient4')
    const ingredient5 = document.querySelector('.amount_ingredient5')
    const ingredient6 = document.querySelector('.amount_ingredient6')
    const ingredient7 = document.querySelector('.amount_ingredient7')
    const ingredient8 = document.querySelector('.amount_ingredient8')
    const instructions = document.querySelector('#instructions')
    //document.querySelector('.header').appendChild(image)
    //image.src = drinkInfo.strDrinkThumb
    document.querySelector('.thumbNail').src = drinkInfo.srtDrinkThumb
    title.innerText = drinkInfo.strDrink
    ingredient1.innerText = `${drinkInfo.strMeasure1}: ${drinkInfo.strIngredient1}`
    ingredient2.innerText = `${drinkInfo.strMeasure2}: ${drinkInfo.strIngredient2}`
    ingredient3.innerText = `${drinkInfo.strMeasure3}: ${drinkInfo.strIngredient3}`
    ingredient4.innerText = `${drinkInfo.strMeasure4}: ${drinkInfo.strIngredient4}`
    ingredient5.innerText = `${drinkInfo.strMeasure5}: ${drinkInfo.strIngredient5}`
    ingredient6.innerText = `${drinkInfo.strMeasure6}: ${drinkInfo.strIngredient6}`
    ingredient7.innerText = `${drinkInfo.strMeasure7}: ${drinkInfo.strIngredient7}`
    ingredient8.innerText = `${drinkInfo.strMeasure8}: ${drinkInfo.strIngredient8}`
    instructions.innerText = drinkInfo.strInstructions
}
getDrinksByName('mint julep')
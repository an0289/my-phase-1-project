function grabById(id) {
    return document.getElementById(id)
}


//Fetch function to find drinks by their name
function getDrinksByName(drinkName) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(resp => resp.json())
    .then(data => {
        data.drinks.forEach(drinkName => {
            renderRecipeCard(drinkName)
        })
        console.log(data.drinks)
        })
    }
//Event Listener Submit 
const submitForm = document.getElementById('drink_form')
const search = document.getElementById('search')
submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    getDrinksByName(search.value)
    submitForm.reset()
})

//Function to dynamical render the card 
function renderRecipeCard(drinkInfo) {
    const toggle = document.createElement('header')
    toggle.setAttribute('id', 'toggle')
    const container = document.getElementById('container')
    container.appendChild(toggle)

    const divHeader = document.createElement('div')
    divHeader.setAttribute('class', 'header')
    toggle.appendChild(divHeader)

    const title = document.createElement('div')
    title.setAttribute('class', 'title')
    toggle.appendChild(title)
    title.innerText = drinkInfo.strDrink

    const image = document.createElement('img')
    image.setAttribute('class', 'thumb_nail')
    divHeader.appendChild(image)
    image.src = drinkInfo.strDrinkThumb

    const article = document.createElement('article')
    container.appendChild(article)

    const ingredients = document.createElement('ul')
    ingredients.setAttribute('class', 'ingredients')
    article.appendChild(ingredients)

    const li1 = document.createElement('li')
    ingredients.appendChild(li1)
    const ingred1 = document.createElement('div')
    ingred1.setAttribute('class', 'amount_ingredient1')
    li1.appendChild(ingred1)
    ingred1.innerText = `${drinkInfo.strMeasure1}: ${drinkInfo.strIngredient1}`

    const li2 = document.createElement('li')
    ingredients.appendChild(li1)
    const ingred2 = document.createElement('div')
    ingred2.setAttribute('class', 'amount_ingredient2')
    li2.appendChild(ingred2)
    ingred2.innerText = `${drinkInfo.strMeasure2}: ${drinkInfo.strIngredient2}`

    const li3 = document.createElement('li')
    ingredients.appendChild(li3)
    const ingred3 = document.createElement('div')
    ingred3.setAttribute('class', 'amount_ingredient3')
    li3.appendChild(ingred3)
    ingred3.innerText = `${drinkInfo.strMeasure3}: ${drinkInfo.strIngredient3}`

    const li4 = document.createElement('li')
    ingredients.appendChild(li4)
    const ingred4 = document.createElement('div')
    ingred1.setAttribute('class', 'amount_ingredient4')
    li4.appendChild(ingred4)
    ingred4.innerText = `${drinkInfo.strMeasure4}: ${drinkInfo.strIngredient4}`

    const li5 = document.createElement('li')
    ingredients.appendChild(li5)
    const ingred5 = document.createElement('div')
    ingred5.setAttribute('class', 'amount_ingredient5')
    li5.appendChild(ingred5)
    ingred5.innerText = `${drinkInfo.strMeasure5}: ${drinkInfo.strIngredient5}`

    const li6 = document.createElement('li')
    ingredients.appendChild(li6)
    const ingred6 = document.createElement('div')
    ingred6.setAttribute('class', 'amount_ingredient6')
    li6.appendChild(ingred6)
    ingred6.innerText = `${drinkInfo.strMeasure6}: ${drinkInfo.strIngredient6}`

    const li7 = document.createElement('li')
    ingredients.appendChild(li7)
    const ingred7 = document.createElement('div')
    ingred7.setAttribute('class', 'amount_ingredient7')
    li7.appendChild(ingred7)
    ingred7.innerText = `${drinkInfo.strMeasure7}: ${drinkInfo.strIngredient7}`

    const li8 = document.createElement('li')
    ingredients.appendChild(li8)
    const ingred8 = document.createElement('div')
    ingred8.setAttribute('class', 'amount_ingredient8')
    li8.appendChild(ingred8)
    ingred8.innerText = `${drinkInfo.strMeasure8}: ${drinkInfo.strIngredient8}`

    const li9 = document.createElement('li')
    ingredients.appendChild(li9)
    const ingred9 = document.createElement('div')
    ingred9.setAttribute('class', 'amount_ingredient9')
    li9.appendChild(ingred9)
    ingred9.innerText = `${drinkInfo.strMeasure9}: ${drinkInfo.strIngredient9}`

    const li10 = document.createElement('li')
    ingredients.appendChild(li10)
    const ingred10 = document.createElement('div')
    ingred10.setAttribute('class', 'amount_ingredient10')
    li10.appendChild(ingred10)
    ingred10.innerText = `${drinkInfo.strMeasure10}: ${drinkInfo.strIngredient10}`

    const li11 = document.createElement('li')
    ingredients.appendChild(li11)
    const ingred11 = document.createElement('div')
    ingred11.setAttribute('class', 'amount_ingredient11')
    li11.appendChild(ingred11)
    ingred11.innerText = `${drinkInfo.strMeasure11}: ${drinkInfo.strIngredient11}`

    const li12 = document.createElement('li')
    ingredients.appendChild(li12)
    const ingred12 = document.createElement('div')
    ingred12.setAttribute('class', 'amount_ingredient12')
    li12.appendChild(ingred12)
    ingred12.innerText = `${drinkInfo.strMeasure12}: ${drinkInfo.strIngredient12}`

    const li13 = document.createElement('li')
    ingredients.appendChild(li13)
    const ingred13 = document.createElement('div')
    ingred13.setAttribute('class', 'amount_ingredient13')
    li13.appendChild(ingred13)
    ingred13.innerText = `${drinkInfo.strMeasure13}: ${drinkInfo.strIngredient13}`

    const li14 = document.createElement('li')
    ingredients.appendChild(li14)
    const ingred14 = document.createElement('div')
    ingred14.setAttribute('class', 'amount_ingredient14')
    li14.appendChild(ingred14)
    ingred14.innerText = `${drinkInfo.strMeasure14}: ${drinkInfo.strIngredient14}`

    const li15 = document.createElement('li')
    ingredients.appendChild(li15)
    const ingred15 = document.createElement('div')
    ingred15.setAttribute('class', 'amount_ingredient15')
    li15.appendChild(ingred15)
    ingred15.innerText = `${drinkInfo.strMeasure15}: ${drinkInfo.strIngredient15}`

    const preparation = document.createElement('div')
    preparation.setAttribute('class', 'preparation')
    article.appendChild(preparation)
    
    const instructions = document.createElement('div')
    instructions.setAttribute('id', 'instructions')
    preparation.appendChild(instructions)

    //Event Listener to display ingredients/instructions
    document.getElementById("toggle").addEventListener("click", function() {
    if (grabById("container").classList.contains("closed")) {
     grabById("container").classList.remove("closed")
    } else {
     grabById("container").classList.add("closed")
    }
 } )
    
}

    //Function to place the grabbed data into the card 
//     function renderRecipeCard(drinkInfo) {
//     const title = document.querySelector(".title")
//     const image = document.querySelector(".thumb_nail")
//     const ingredient1 = document.querySelector('.amount_ingredient1')
//     const ingredient2 = document.querySelector('.amount_ingredient2')
//     const ingredient3 = document.querySelector('.amount_ingredient3')
//     const ingredient4 = document.querySelector('.amount_ingredient4')
//     const ingredient5 = document.querySelector('.amount_ingredient5')
//     const ingredient6 = document.querySelector('.amount_ingredient6')
//     const ingredient7 = document.querySelector('.amount_ingredient7')
//     const ingredient8 = document.querySelector('.amount_ingredient8')
//     const instructions = document.querySelector('#instructions')
//     title.innerText = drinkInfo.strDrink
//     image.src = drinkInfo.strDrinkThumb
//     ingredient1.innerText = `${drinkInfo.strMeasure1}: ${drinkInfo.strIngredient1}`
//     ingredient2.innerText = `${drinkInfo.strMeasure2}: ${drinkInfo.strIngredient2}`
//     ingredient3.innerText = `${drinkInfo.strMeasure3}: ${drinkInfo.strIngredient3}`
//     ingredient4.innerText = `${drinkInfo.strMeasure4}: ${drinkInfo.strIngredient4}`
//     ingredient5.innerText = `${drinkInfo.strMeasure5}: ${drinkInfo.strIngredient5}`
//     ingredient6.innerText = `${drinkInfo.strMeasure6}: ${drinkInfo.strIngredient6}`
//     ingredient7.innerText = `${drinkInfo.strMeasure7}: ${drinkInfo.strIngredient7}`
//     ingredient8.innerText = `${drinkInfo.strMeasure8}: ${drinkInfo.strIngredient8}`
//     instructions.innerText = drinkInfo.strInstructions
// }
getDrinksByName('mojito')
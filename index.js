// function grabById(id) {
//     return document.getElementById(id)
// }

 
//Fetch function to find drinks by their name
function getDrinksByName(drinkName) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(resp => resp.json())
    .then(data => {
        drinksArray = data.drinks
        drinksArray.forEach(drinkName => {
            renderRecipeCard(drinkName)
        })
        console.log(drinksArray)
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

// submitFrom.addEventListener('change', (e) => {
//     if (e.search.value === drinkName) {
//         return 
//     }
//    }) 


//Function to dynamical render the card 
function renderRecipeCard(drinkInfo) {
   
    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    container.setAttribute('class', 'closed')
    const collection = document.getElementById('recipe-card-collection')
    collection.appendChild(container)

    const toggle = document.createElement('header')
    toggle.setAttribute('id', 'toggle')
    container.appendChild(toggle)

    const divHeader = document.createElement('div')
    divHeader.setAttribute('class', 'header')
    toggle.appendChild(divHeader)

    const image = document.createElement('img')
    image.setAttribute('class', 'thumb_nail')
    divHeader.appendChild(image)
    image.src = drinkInfo.strDrinkThumb

    const title = document.createElement('div')
    title.setAttribute('class', 'title')
    toggle.appendChild(title)
    title.innerText = drinkInfo.strDrink

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
    ingred1.innerText = `${drinkInfo.strIngredient1}: ${drinkInfo.strMeasure1}`
    if (drinkInfo.strIngredient1 === null) {
        li1.remove()
    } else {
        li1.appendChild(ingred1)
    }

    const li2 = document.createElement('li')
    ingredients.appendChild(li2)
    const ingred2 = document.createElement('div')
    ingred2.setAttribute('class', 'amount_ingredient2')
    li2.appendChild(ingred2)
    ingred2.innerText = `${drinkInfo.strIngredient2}: ${drinkInfo.strMeasure2}`
    if (drinkInfo.strIngredient2 === null) {
        li2.remove()
    } else {
        li2.appendChild(ingred2)
    }

    const li3 = document.createElement('li')
    ingredients.appendChild(li3)
    const ingred3 = document.createElement('div')
    ingred3.setAttribute('class', 'amount_ingredient3')
    li3.appendChild(ingred3)
    ingred3.innerText = `${drinkInfo.strIngredient3}: ${drinkInfo.strMeasure3}`
    if (drinkInfo.strIngredient3 === null) {
        li3.remove()
    } else {
        li3.appendChild(ingred3)
    }
    
    const li4 = document.createElement('li')
    ingredients.appendChild(li4)
    const ingred4 = document.createElement('div')
    ingred1.setAttribute('class', 'amount_ingredient4')
    li4.appendChild(ingred4)
    ingred4.innerText = `${drinkInfo.strIngredient4}: ${drinkInfo.strMeasure4}`
    if (drinkInfo.strIngredient4 === null) {
        li4.remove()
    } else {
        li4.appendChild(ingred4)
    }

    const li5 = document.createElement('li')
    ingredients.appendChild(li5)
    const ingred5 = document.createElement('div')
    ingred5.setAttribute('class', 'amount_ingredient5')
    li5.appendChild(ingred5)
    ingred5.innerText = `${drinkInfo.strIngredient5}: ${drinkInfo.strMeasure5}`
    if (drinkInfo.strIngredient5 === null) {
        li5.remove()
    } else {
        li5.appendChild(ingred5)
    }

    const li6 = document.createElement('li')
    ingredients.appendChild(li6)
    const ingred6 = document.createElement('div')
    ingred6.setAttribute('class', 'amount_ingredient6')
    li6.appendChild(ingred6)
    ingred6.innerText = `${drinkInfo.strIngredient6}: ${drinkInfo.strMeasure6}`
    if (drinkInfo.strIngredient6 === null) {
        li6.remove()
    } else {
        li6.appendChild(ingred6)
    }

    const li7 = document.createElement('li')
    ingredients.appendChild(li7)
    const ingred7 = document.createElement('div')
    ingred7.setAttribute('class', 'amount_ingredient7')
    li7.appendChild(ingred7)
    ingred7.innerText = `${drinkInfo.strIngredient7}: ${drinkInfo.strMeasure7}`
    if (drinkInfo.strIngredient7 === null) {
        li7.remove()
    } else {
        li7.appendChild(ingred7)
    }

    const li8 = document.createElement('li')
    ingredients.appendChild(li8)
    const ingred8 = document.createElement('div')
    ingred8.setAttribute('class', 'amount_ingredient8')
    li8.appendChild(ingred8)
    ingred8.innerText = `${drinkInfo.strIngredient8}: ${drinkInfo.strMeasure8}`
    if (drinkInfo.strIngredient8 === null) {
        li8.remove()
    } else {
        li8.appendChild(ingred8)
    }

    const li9 = document.createElement('li')
    ingredients.appendChild(li9)
    const ingred9 = document.createElement('div')
    ingred9.setAttribute('class', 'amount_ingredient9')
    li9.appendChild(ingred9)
    ingred9.innerText = `${drinkInfo.strIngredient9}: ${drinkInfo.strMeasure9}`
    if (drinkInfo.strIngredient9 === null) {
        li9.remove()
    } else {
        li9.appendChild(ingred9)
    }

    const li10 = document.createElement('li')
    ingredients.appendChild(li10)
    const ingred10 = document.createElement('div')
    ingred10.setAttribute('class', 'amount_ingredient10')
    li10.appendChild(ingred10)
    ingred10.innerText = `${drinkInfo.strIngredient10}: ${drinkInfo.strMeasure10}`
    if (drinkInfo.strIngredient10 === null) {
        li10.remove()
    } else {
        li10.appendChild(ingred10)
    }

    const li11 = document.createElement('li')
    ingredients.appendChild(li11)
    const ingred11 = document.createElement('div')
    ingred11.setAttribute('class', 'amount_ingredient11')
    li11.appendChild(ingred11)
    ingred11.innerText = `${drinkInfo.strIngredient11}: ${drinkInfo.strMeasure11}`
    if (drinkInfo.strIngredient11 === null) {
        li11.remove()
    } else {
        li11.appendChild(ingred11)
    }

    const li12 = document.createElement('li')
    ingredients.appendChild(li12)
    const ingred12 = document.createElement('div')
    ingred12.setAttribute('class', 'amount_ingredient12')
    li12.appendChild(ingred12)
    ingred12.innerText = `${drinkInfo.strIngredient12}: ${drinkInfo.strMeasure12}`
    if (drinkInfo.strIngredient12 === null) {
        li12.remove()
    } else {
        li12.appendChild(ingred12)
    }

    const li13 = document.createElement('li')
    ingredients.appendChild(li13)
    const ingred13 = document.createElement('div')
    ingred13.setAttribute('class', 'amount_ingredient13')
    li13.appendChild(ingred13)
    ingred13.innerText = `${drinkInfo.strIngredient13}: ${drinkInfo.strMeasure13}`
    if (drinkInfo.strIngredient13 === null) {
        li13.remove()
    } else {
        li13.appendChild(ingred13)
    }

    const li14 = document.createElement('li')
    ingredients.appendChild(li14)
    const ingred14 = document.createElement('div')
    ingred14.setAttribute('class', 'amount_ingredient14')
    li14.appendChild(ingred14)
    ingred14.innerText = `${drinkInfo.strIngredient14}: ${drinkInfo.strMeasure14}`
    if (drinkInfo.strIngredient14 === null) {
        li14.remove()
    } else {
        li14.appendChild(ingred14)
    }

    const li15 = document.createElement('li')
    ingredients.appendChild(li15)
    const ingred15 = document.createElement('div')
    ingred15.setAttribute('class', 'amount_ingredient15')
    li15.appendChild(ingred15)
    ingred15.innerText = `${drinkInfo.strIngredient15}: ${drinkInfo.strMeasure15}`
    if (drinkInfo.strIngredient15 === null) {
        li15.remove()
    } else {
        li5.appendChild(ingred5)
    }

    const preparation = document.createElement('div')
    preparation.setAttribute('class', 'preparation')
    article.appendChild(preparation)
    
    const instructions = document.createElement('div')
    instructions.setAttribute('id', 'instructions')
    preparation.appendChild(instructions)
    instructions.innerText = drinkInfo.strInstructions

    toggle.addEventListener("click", function() {
    if (container.classList.contains("closed")) {
     container.classList.remove("closed")
    } else {
     container.classList.add("closed")
    }
})
      
}


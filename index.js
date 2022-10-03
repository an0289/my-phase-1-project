const collection = document.getElementById('recipe-card-collection')
//Random Recipe to Generate When Page Loads
document.addEventListener('DOMContentLoaded', getRandomDrinkRecipe)

//Event Listener Submit 
const submitForm = document.getElementById('drink_form')
const search = document.getElementById('search')
submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    removeChildren(collection)
    getDrinksByName(search.value)
    submitForm.reset()
})

//Event Listener Change 
function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const select = document.getElementById('letter-dropdown')
select.addEventListener('change', (e) => {
    if (e.target.value === 'random') {
        removeChildren(collection)    
        getRandomDrinkRecipe()
    } else {
        removeChildren(collection)
        getDrinksByFirstLetter(e.target.value)
            
    }
})

// Fetch function to find drinks by their name
function getDrinksByName(drinkName) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(resp => resp.json())
    .then(data => {
        drinksArray = data.drinks
        drinksArray.forEach(drinkName => {
           if (drinksArray.length <= 1) {
            renderOneCard(drinkName)
           } else {
            renderRecipeCard(drinkName) }
        })
        console.log(drinksArray)
        })
}

//Fetch function to find drinks by their first letter
function getDrinksByFirstLetter(firstLetter) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then(resp => resp.json())
    .then(data => {
        data.drinks.forEach(firstLetter => renderRecipeCard(firstLetter))
    })
}

//Fetch function for random drink recipe
function getRandomDrinkRecipe() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(resp => resp.json())
    .then(data => {
        data.drinks.forEach(drinkName => {
            renderOneCard(drinkName)
        })
    })
}

//Function to dynamically render the card 
function renderRecipeCard(drinkInfo) {
   
    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    container.setAttribute('class', 'closed')
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

    // We want to refactor the code so that we write a function which executes the block of code between 103 and 116 only as many times as needed.
    // create base function and copy existing code of ingredient1
    //create somehow to do this for however many ingredients are listed 
    //need to have it move to the next ingredient after each ingredient
    for (let num =1; num <=15; num++) {
        renderIngredient(num)
    }
    function renderIngredient (num) {
        const ingredientName = 'strIngredient' + num
        const measurementName = 'strMeasure' + num
        // console.log(drinkInfo[ingredientName])
        const li = document.createElement('li')
        ingredients.appendChild(li)
        const ingred = document.createElement('div')
        ingred.setAttribute('class', 'amount_ingredient1')
        li.appendChild(ingred)
        ingred.innerText = `${drinkInfo[ingredientName]}: ${drinkInfo[measurementName]}`
        if (drinkInfo[ingredientName] === null) {
            li.remove()
        } else if (drinkInfo[measurementName] === null) {
            ingred.innerText = `${drinkInfo[ingredientName]}`
            li.appendChild(ingred)
        } else {
            li.appendChild(ingred)
        }
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
//Render One Card Function Since Styling has to be different 
function renderOneCard(drinkInfo) {
    const newContainer = document.createElement('div')
    newContainer.setAttribute('class', 'newContainer')
    collection.appendChild(newContainer)

    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    container.setAttribute('class', 'closed')
    newContainer.appendChild(container)

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

    for (let num =1; num <=15; num++) {
        renderIngredient(num)
    }
    function renderIngredient (num) {
        const ingredientName = 'strIngredient' + num
        const measurementName = 'strMeasure' + num
        // console.log(drinkInfo[ingredientName])
        const li = document.createElement('li')
        ingredients.appendChild(li)
        const ingred = document.createElement('div')
        ingred.setAttribute('class', 'amount_ingredient1')
        li.appendChild(ingred)
        ingred.innerText = `${drinkInfo[ingredientName]}: ${drinkInfo[measurementName]}`
        if (drinkInfo[ingredientName] === null) {
            li.remove()
        } else if (drinkInfo[measurementName] === null) {
            ingred.innerText = `${drinkInfo[ingredientName]}`
            li.appendChild(ingred)
        } else {
            li.appendChild(ingred)
        }
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






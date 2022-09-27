# My Phase 1 Project - A Searchable Cocktail Recipe Website
1. Users should be able to use the search bar to search for cocktail recipes 
2. Users should be able to click on the recipe card and it opens to reveal the ingredients and preparation instructions
3. A randome recipe is rendered every time the webpage loads 
4. Users can use the dropdown menu to select a letter to have all cocktail recipes that start with that letter appear on the page 

## CSS Source 
I used Reece Bennett's 'Cocktail Recipe Card" design posted on freefrontend.com (Source: https://freefrontend.com/css-recipe-cards/) since it's design was not only aesthetically pleasing, but it also was set up for that when a user clicks on the drink picture it 'opens' up to reveal the actual recipe: https://codepen.io/reece-bennett/pen/bqmaWy

Because we are using Fetch API for this project, the HTML elements that are used to create the recipe card will have to be created dynamically, so to make it easier, you can comment out the HTML elements and reference them when creating the code in the index.js file to make sure the recipe card will be rendered to match the CSS design. 

The click event that enables the recipe card to 'open' up, will also need to be modified and placed within the function created to render the recipe card data. 

A new <div> tag will need to be created that the HTML elements used to create the recipe card can be appended to since the CSS design is intended for one recipe card that renders in middle of the webpage. The CSS design elements for the original recipe card will need to be removed and CSS design for the new <div> tag will need to include a grid display to prevent the recipe cards from stacking on each other as they're generated. 

Lastly, we need to create an additional <div> tag that contains the CSS design elements of the original card display that can be used for when we know that only a single recipe card will be rendered. 

## API Source 
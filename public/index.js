console.log('the js file is being loaded correctly');

var recipeTemplate = document.querySelector('#recipe-card');
var recipeContainer = document.querySelector('.row');



/* global axios */

// response = Unirest.get("http://localhost:3000/v2/recipes")
// p response.body
// get data
axios.get("http://localhost:3000/v2/recipes").then(function(response) {
  console.log(response.data);
  var recipes = response.data;
  // loop through data
  for (var i = 0; i < recipes.length; i++) {
    var recipeClone = recipeTemplate.content.cloneNode(true);
    recipeClone.querySelector('.card-title').innerText = recipes[i].title;
    recipeClone.querySelector('.ingredients').innerText = recipes[i].ingredients;
    recipeClone.querySelector('.directions').innerText = recipes[i].directions;
    recipeClone.querySelector('.chef').innerText = recipes[i].chef;
    recipeClone.querySelector('.image-url').src = recipes[i].image_url;
    recipeContainer.appendChild(recipeClone);
  }

  // modify the clone
});

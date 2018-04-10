console.log('the js file is being loaded correctly');

var recipeTemplate = document.querySelector('#recipe-card');
var recipeContainer = document.querySelector('.row');

recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));
recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));
recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));
recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));
recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));
recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));
recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));
recipeContainer.appendChild(recipeTemplate.content.cloneNode(true));



class V2::RecipesController < ApplicationController
  def index
    # show all the recipes
    # get all the recipes from the db
    recipes = Recipe.all
    # show the recipes to the user
    render json: recipes.as_json
  end

  def show
    # get user input
    the_id = params[:id]
    # grab a particular recipe from the db
    recipe = Recipe.find_by(id: the_id)
    # show that recipe to the user
    render json: recipe.as_json
  end
end

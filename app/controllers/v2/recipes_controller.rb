class V2::RecipesController < ApplicationController
  def index
    # show all the recipes
    # get all the recipes from the db
    recipes = Recipe.all
    # show the recipes to the user
    render json: recipes.as_json
  end
end

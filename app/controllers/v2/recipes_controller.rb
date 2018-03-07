class V2::RecipesController < ApplicationController
  def show_the_recipe
    # get data from db
    recipe1 = Recipe.second
    # show data to user
    render json: {title: recipe1.title, chef: recipe1.chef, ingredients: recipe1.ingredients, directions: recipe1.directions, prepTime: recipe1.prep_time, image: recipe1.image_url}
  end

  def all_the_recipes
    render json: Recipe.all.as_json
  end
end

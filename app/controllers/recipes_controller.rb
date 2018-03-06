class RecipesController < ApplicationController
  def show_the_recipe
    # get data from db
    recipe1 = Recipe.second
    # show data to user
    render json: {title: recipe1.title, chef: recipe1.chef, ingredients: recipe1.ingredients, directions: recipe1.directions, prep_time: recipe1.prep_time, image: recipe1.image_url}
  end
end

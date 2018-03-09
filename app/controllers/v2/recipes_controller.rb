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

  def create
    # make a new recipe in the database
    recipe1 = Recipe.new(
      title: params[:input_title],
      ingredients: params[:input_ingredients],
      directions: params[:input_directions],
      prep_time: params[:input_prep_time],
      chef: params[:input_chef],
      image_url: params[:input_image_url]
    )
    recipe1.save
    # render?
    render json: recipe1.as_json
  end

  def update
    # a combination of show and create
    # show
    # get user data and find a recipe in the db
    the_id = params[:id]
    recipe = Recipe.find_by(id: the_id)
    recipe.update(
      title: params[:input_title],
      chef: params[:input_chef],
      ingredients: params[:input_ingredients],
      directions: params[:input_directions],
      prep_time: params[:input_prep_time]
    )
    render json: recipe.as_json
  end
end

require 'unirest'

# p "type in your search query here"
# search_term = gets.chomp
# response = Unirest.get("localhost:3000/v2/recipes?search=#{search_term}")
# p response.body

# create action
# p "enter your title"
# title = gets.chomp

# p "enter your ingredients"
# ingredients = gets.chomp

# p "enter your directions"
# directions = gets.chomp

# p "enter your prep_time"
# prep_time = gets.chomp

# p "enter your chef"
# chef = gets.chomp

# response = Unirest.post("localhost:3000/v2/recipes", parameters: {
#     input_title: title,
#     input_ingredients: ingredients,
#     input_directions: directions,
#     input_prep_time: prep_time,
#     input_chef: chef
#   }
# )


# puts JSON.pretty_generate(response.body)


# update action

# p "enter the id of the recipe you would like to update"
# recipe_id = gets.chomp

# p "enter your title"
# title = gets.chomp

# p "enter your ingredients"
# ingredients = gets.chomp

# p "enter your directions"
# directions = gets.chomp

# p "enter your prep_time"
# prep_time = gets.chomp

# p "enter your chef"
# chef = gets.chomp


# response = Unirest.patch("localhost:3000/v2/recipes/#{recipe_id}", parameters: {
#     input_title: title,
#     input_chef: chef,
#     input_ingredients: ingredients,
#     input_directions: directions,
#     input_prep_time: prep_time
#   }
# )

# puts JSON.pretty_generate(response.body)


# destroy

# p "which recipe would you like to delete?"
# recipe_id = gets.chomp

# response = Unirest.delete("localhost:3000/v2/recipes/#{recipe_id}")

# puts JSON.pretty_generate(response.body)

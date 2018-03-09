require 'unirest'

p "enter your title"
title = gets.chomp

p "enter your ingredients"
ingredients = gets.chomp

p "enter your directions"
directions = gets.chomp

p "enter your prep_time"
prep_time = gets.chomp

p "enter your chef"
chef = gets.chomp

response = Unirest.post("localhost:3000/v2/recipes", parameters: {
    input_title: title,
    input_ingredients: ingredients,
    input_directions: directions,
    input_prep_time: prep_time,
    input_chef: chef
  }
)

puts JSON.pretty_generate(response.body)

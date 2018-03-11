class Recipe < ApplicationRecord
  def as_json
    {
      id: id,
      directions: directions_list,
      ingredients: ingredients_list,
      chef: chef,
      prep_time: hours_and_minutes_prep_time,
      title: title,
      image_url: image_url,
      created_at: friendly_created_at
    }
  end

  def friendly_created_at
    created_at.strftime("%b %d, %Y")
  end

  def directions_list
    directions.split(", ")
  end

  def ingredients_list
    ingredients.split(", ")
  end

  def hours_and_minutes_prep_time
    # input 84
    hours = prep_time / 60
    minutes = prep_time % 60
    result = ""
    result += "#{hours} hours " if hours > 0
    result += "#{minutes} minutes" if minutes > 0
    result
    # output "1 hour and 24 minutes"
  end
end

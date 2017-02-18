# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

  User.create!(username: "Dmitri Shostakovich", password: "starwars", gender: "Male", sexuality: "Bisexual", age: 23, zipcode: 85718, min_age:19, max_age: 28)
  User.create!(username: "Clara Schumann", password: "starwars", gender: "Female", sexuality: "Bisexual", age: 23, zipcode: 11215, min_age:19, max_age: 28)

PersonalityQuestion.destroy_all

PersonalityQuestion.create!(title: "Do you think it is important to be fluent in more than one language?")
PersonalityQuestion.create!(title: "Imagine you are having sex with a partner, who begins to give you specific instructions on how to best provide satisfaction. Assuming there is no danger, would you follow these instructions?")

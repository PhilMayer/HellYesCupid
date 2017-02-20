# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

  genders = ["Man", "Woman"]
  sexualities = ["Gay", "Straight", "Bisexual"]
  ages = (18..35).to_a
  zipcodes = [11215, 10001, 85718, 85704, 10102, 10203, 10466]

  10.times do
    name = Faker::Name.unique.name
    gender = genders.sample
    sexuality = sexualities.sample
    age = ages.sample
    zipcode = zipcodes.sample

    User.create!(username: name, password: "starwars", gender: gender,
      sexuality: sexuality, age: age, zipcode: zipcode, min_age: 18,
      max_age: 99, image: "http://lorempixel.com/200/200/people")
  end


PersonalityQuestion.destroy_all
PersonalityQuestionAnswer.destroy_all

  10.times do
    random_question = Faker::Lorem.sentence
    question = PersonalityQuestion.create!(title: random_question)

    (2..4).to_a.sample.times do
      answer = Faker::Lorem.word

      PersonalityQuestionAnswer.create!(question_id: question.id, answer: answer)
    end
  end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Conversation.destroy_all
Message.destroy_all

  User.create!(username: "findingDemo", password: "starwars", gender: "Man",
    sexuality: "Bisexual", age: 34, zipcode: 11215, min_age: 18,
    max_age: 99, image: "http://vignette3.wikia.nocookie.net/pixar/images/2/23/Nemo-finding-nemo-wallpapers-9-0-s-307x512-1.jpg")

  genders = ["Man", "Woman"]
  sexualities = ["Gay", "Straight", "Bisexual"]
  ages = (18..35).to_a
  zipcodes = [11215, 10001, 85718, 85704, 10102, 10203, 10466]

  10.times do
    name1 = Faker::Name.unique.name
    name2 = Faker::Name.unique.name
    gender1 = genders.sample
    gender2 = genders.sample
    sexuality1 = sexualities.sample
    sexuality2 = sexualities.sample
    age = ages.sample
    zipcode = zipcodes.sample

    person1 = User.create!(username: name1, password: "starwars", gender: gender1,
      sexuality: sexuality1, age: age, zipcode: zipcode, min_age: 18,
      max_age: 99, image: "http://lorempixel.com/200/200/people")

    person2 = User.create!(username: name2, password: "starwars", gender: gender2,
      sexuality: sexuality2, age: age, zipcode: zipcode, min_age: 18,
      max_age: 99, image: "http://lorempixel.com/200/200/people")

    thread = Conversation.create!(lover_one_id: person1.id, lover_two_id: person2.id)

    couple = [person1, person2]
    20.times do
      Message.create!(author_id: couple.sample.id, thread_id: thread.id, body: Faker::Lorem.paragraph(1, true, 4))
    end

  end


PersonalityQuestion.destroy_all
PersonalityQuestionAnswer.destroy_all

  # 10.times do
  #   random_question = Faker::Lorem.sentence
  #   question = PersonalityQuestion.create!(title: random_question)
  #
  #   (2..4).to_a.sample.times do
  #     answer = Faker::Lorem.word
  #
  #     PersonalityQuestionAnswer.create!(question_id: question.id, answer: answer)
  #   end
  # end


questions = {"How many eggs did Marlin and Coral have?": ["250", "400", "700", "1000"],
  "What animal attacks Nemo's neighborhood at the beginning of the film?": ["Shark", "Eel", "Barracuda", "Anglerfish"],
  "Which of Nemo's fins is the 'lucky' one?": ["Dorsal fin", "Right fin", "Left fin", "Caudal fin"],
  "What color is the rim of scuba divers' goggles seen in the film?": ["Green", "Yellow", "Blue", "Red"],
  "Who is the first one to speak to Nemo in the tank?": ["Peach", "Flo", "Bubbles", "Gill"],
  "Do you consider yourself more of a Nemo, Dory, Destiny, or Sigourney Weaver?": ["Nemo!", "Dory!", "Destiny!", "Sigourney?"],
  "Which Disney/Pixar character can be seen on the floor in the dentist's office?": ["Buzz Lightyear", "Mike Wazowski", "Rex", "WALL-E"],
  "Which species of fish ISN'T in the tank gang?": ["Moorish Idol", "Royal Gramma", "Yellow Goatfish", "Black and White Humbug"],
  "Dory refers to Nemo as all of these names but one. Which one doesn't belong?": ["Chico", "Fabio", "Meeko", "Elmo"],
  "How many scars does Gill have?": ["1", "2", "3"],
  "What type of shark is Anchor?": ["Great White Shark", "Hammerhead Shark", "Tiger Shark", "Mako Shark"],
  "What does E.A.C. stand for?": ["East Australian Cove", "East Australian Current", "East Australian Cloud", "East Australian Curve"],
  "When does Marlin first see Dory?": ["Right after Nemo gets taken", "On the first day of school", "At the Shark meeting", "During the Anglerfish encounter"]
  }

    questions.keys.each do |question|
      q = PersonalityQuestion.create!(title: question)
      questions[question].each do |answer|
        PersonalityQuestionAnswer.create!(question_id: q.id, answer: answer)
      end
    end

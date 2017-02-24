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
users = []

  u1 = User.create!(username: "findingDemo", password: "starwars", gender: "Man",
    sexuality: "Bisexual", age: 29, zipcode: 11215, min_age: 18,
    max_age: 99, image: "http://vignette3.wikia.nocookie.net/pixar/images/2/23/Nemo-finding-nemo-wallpapers-9-0-s-307x512-1.jpg")

  users.push(u1)

  u2 = User.create!(username: "snacksOnSnacks", password: "starwars", gender: "Woman",
    sexuality: "Bisexual", age: 24, zipcode: 10001, min_age: 18,
    max_age: 99, image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/773/medium/David_Tan.jpg?1483381662")

  users.push(u2)

  u3 = User.create!(username: "basic_jim", password: "starwars", gender: "Man",
    sexuality: "Bisexual", age: 23, zipcode: 10001, min_age: 18,
    max_age: 99, image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/779/medium/James_Greenberg.jpg?1483381957")

  users.push(u3)

  u4 = User.create!(username: "KyleWillReceiveAttention", password: "starwars", gender: "Woman",
    sexuality: "Bisexual", age: 26, zipcode: 10001, min_age: 18,
    max_age: 99, image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/791/medium/Kyle_Sauri.jpg?1483382242")

  users.push(u4)

  u5 = User.create!(username: "Huh?", password: "starwars", gender: "Man",
    sexuality: "Bisexual", age: 27, zipcode: 10001, min_age: 18,
    max_age: 99, image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/744/medium/Meir_Jordan.jpg?1483382573")

  users.push(u5)

  u6 = User.create!(username: "DjJapanVersaceMate", password: "starwars", gender: "Woman",
    sexuality: "Bisexual", age: 27, zipcode: 11215, min_age: 18,
    max_age: 99, image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/790/medium/Naz.jpg?1483382742")

  users.push(u6)

  u7 = User.create!(username: "omgBroBRO", password: "starwars", gender: "Man",
    sexuality: "Bisexual", age: 28, zipcode: 11215, min_age: 18,
    max_age: 99, image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/755/medium/Gen_%22Danny%22.jpg?1483381838")

  users.push(u7)

  u8 = User.create!(username: "safari_4never", password: "starwars", gender: "Man",
    sexuality: "Bisexual", age: 22, zipcode: 11215, min_age: 18,
    max_age: 99, image: "http://gravatar.com/avatar/de3ae4d916e03d77388861346e1149d3?secure=false&size=300")

  users.push(u8)

  u8 = User.create!(username: "youMakeMeHappy", password: "starwars", gender: "Man",
    sexuality: "Bisexual", age: 85, zipcode: 11215, min_age: 18,
    max_age: 99, image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/766/medium/Terrance_Xin.jpg?1483382997")



  genders = ["Man", "Woman"]
  sexualities = ["Gay", "Straight", "Bisexual"]
  ages = (18..35).to_a
  zipcodes = [11215, 10001, 85718, 85704, 10102, 10203, 10466]


  # 10.times do
  #   name1 = Faker::Name.unique.name
  #   name2 = Faker::Name.unique.name
  #   gender1 = genders.sample
  #   gender2 = genders.sample
  #   sexuality1 = sexualities.sample
  #   sexuality2 = sexualities.sample
  #   age = ages.sample
  #   zipcode = zipcodes.sample
  #
  #   person1 = User.create!(username: name1, password: "starwars", gender: gender1,
  #     sexuality: sexuality1, age: age, zipcode: zipcode, min_age: 18,
  #     max_age: 99, image: "http://lorempixel.com/200/200/people")
  #
  #   users.push(person1)
  #
  #   person2 = User.create!(username: name2, password: "starwars", gender: gender2,
  #     sexuality: sexuality2, age: age, zipcode: zipcode, min_age: 18,
  #     max_age: 99, image: "http://lorempixel.com/200/200/people")
  #
  #   users.push(person2)
  #
  #   thread = Conversation.create!(lover_one_id: person1.id, lover_two_id: person2.id)
  #
  #   couple = [person1, person2]
  #   20.times do
  #     Message.create!(author_id: couple.sample.id, thread_id: thread.id, body: Faker::Lorem.paragraph(1, true, 4))
  #   end
  #
  # end


PersonalityQuestion.destroy_all
PersonalityQuestionAnswer.destroy_all
UserQuestionResponse.destroy_all

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

  database_questions = []

    questions.keys.each do |question|
      q = PersonalityQuestion.create!(title: question)
      database_questions.push(q)
      questions[question].each do |answer|
        PersonalityQuestionAnswer.create!(question_id: q.id, answer: answer)
      end
    end

  users.each do |user|
    database_questions.each do |question|
      num_answers = question.answers.length
      my_answer = (0..(num_answers - 1)).to_a.sample

      question.answers.each_with_index do |answer, idx|
        acceptable = [true, false].sample
        will_accept = []
        will_accept.push(answer.id) if acceptable

        weight = [1, 10, 50, 100].sample

        if idx == my_answer
          will_accept.push(answer.id)
          UserQuestionResponse.create!(user_id: user.id, answer_id: answer.id, acceptable_answers: will_accept, weight: weight)
        end
      end
    end
  end

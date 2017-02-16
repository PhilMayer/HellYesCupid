json.extract! user, :username, :id, :gender, :sexuality, :age, :zipcode,
                    :min_age, :max_age, :profile_pic, :summary, :doing_with_life,
                    :really_good_at, :favorite_things, :six_things, :think_about,
                    :typical_friday, :message_me_if

json.image_url user.image.url

class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null:false
      t.string :email
      t.string :password_digest, null:false
      t.string :session_token, null:false
      t.string :gender, null:false
      t.string :sexuality, null:false
      t.integer :age, null:false
      t.string :country
      t.integer :zipcode, null:false
      t.integer :min_age, null:false
      t.integer :max_age, null:false
      t.string :profile_pic
      t.text :summary
      t.text :doing_with_life
      t.text :really_good_at
      t.text :favorite_things
      t.text :six_things
      t.text :think_about
      t.text :typical_friday
      t.text :message_me_if

      t.timestamps
    end
  end
end

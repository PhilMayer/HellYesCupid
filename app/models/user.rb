class User < ActiveRecord::Base
  attr_reader :password

 validates :username, :password_digest, :session_token,
  :gender, :sexuality, :age, :zipcode, :min_age, :max_age, presence: true

 validates :password, length: {minimum: 6, allow_nil: true}
 after_initialize :ensure_session_token

geocoded_by :zipcode   # can also be an IP address
after_validation :geocode, if: ->(obj){ obj.zipcode.present? and obj.zipcode_changed? }
acts_as_mappable :lat_column_name => :latitude, :lng_column_name => :longitude

 has_many(
  :question_responses,
  foreign_key: :user_id,
  class_name: "UserQuestionResponse"
 )

 has_many(
  :messages,
  foreign_key: :author_id,
  class_name: "Message"
 )

 has_many(
  :threads,
  through: :messages,
  source: :thread
 )

 has_attached_file :image, default_url: "strangerbarb.png"
 validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

 def self.find_by_credentials(username, pw)
   user = User.find_by(username: username)
   return nil unless user && BCrypt::Password.new(user.password_digest).is_password?(pw)
   user
 end

 def password=(password)
   @password = password
   self.password_digest = BCrypt::Password.create(password)
 end

 def preference
   case self.sexuality
   when "Straight"
      return self.gender == "Man" ? "Woman" : "Man"
   when "Gay"
     return self.gender == "Man" ? "Man" : "Woman"
   else
     return ["Man", "Woman"]
   end
 end

 def generate_session_token
   self.session_token = SecureRandom::urlsafe_base64(16)
 end

 def reset_session_token
   self.generate_session_token
   self.save!
   self.session_token
 end

 private
 def ensure_session_token
   self.session_token ||= self.generate_session_token
 end
end

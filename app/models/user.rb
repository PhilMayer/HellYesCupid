class User < ActiveRecord::Base
  attr_reader :password

 validates :username, :password_digest, :session_token,
  :gender, :sexuality, :age, :zipcode, :min_age, :max_age, presence: true
  
 validates :password, length: {minimum: 6, allow_nil: true}
 after_initialize :ensure_session_token

 has_many(
  :question_responses,
  foreign_key: :user_id,
  class_name: "UserQuestionResponse"
 )

 has_attached_file :image, default_url: "test.png"
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

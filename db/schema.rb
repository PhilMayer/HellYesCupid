# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170223013023) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.integer  "lover_one_id", null: false
    t.integer  "lover_two_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["lover_one_id"], name: "index_conversations_on_lover_one_id", using: :btree
    t.index ["lover_two_id"], name: "index_conversations_on_lover_two_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "thread_id",  null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id", using: :btree
    t.index ["thread_id"], name: "index_messages_on_thread_id", using: :btree
  end

  create_table "personality_question_answers", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.string   "answer",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["question_id"], name: "index_personality_question_answers_on_question_id", using: :btree
  end

  create_table "personality_questions", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_question_responses", force: :cascade do |t|
    t.integer  "user_id",                         null: false
    t.integer  "answer_id",                       null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "acceptable_answers", default: [],              array: true
    t.integer  "weight"
    t.index ["answer_id"], name: "index_user_question_responses_on_answer_id", using: :btree
    t.index ["user_id"], name: "index_user_question_responses_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                        null: false
    t.string   "email"
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.string   "gender",                          null: false
    t.string   "sexuality",                       null: false
    t.integer  "age",                             null: false
    t.string   "country"
    t.integer  "zipcode",                         null: false
    t.integer  "min_age",            default: 18, null: false
    t.integer  "max_age",            default: 99, null: false
    t.string   "profile_pic"
    t.text     "summary"
    t.text     "doing_with_life"
    t.text     "really_good_at"
    t.text     "favorite_things"
    t.text     "six_things"
    t.text     "think_about"
    t.text     "typical_friday"
    t.text     "message_me_if"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.float    "latitude"
    t.float    "longitude"
  end

end

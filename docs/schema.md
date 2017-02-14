# Database Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
gender          | string    | not null
sexuality       | string    | not null
age             | integer   | not null
country         | string    | not null
zipcode         | integer   | not null
min_age         | integer   | not null
max_age         | integer   | not null
profile_pic     | string    | not null
summary         | text      |
doing_with_life | text      |
really_good_at  | text      |
favorite_tings  | text      |
six_things      | text      |
think_about     | text      |
typical_friday  | text      |
message_me_if   | text      |
password_digest | string    | not null
session_token   | string    | not null


## personality questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null

## personality question answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key, indexed
answer          | string    | not null

## user responses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
answer_id       | integer   | not null, foreign key, indexed

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key, indexed
thread_id       | integer   | not null, foreign key, indexed
body            | text      | not null


## threads
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
lover_one_id    | integer   | not null, foreign key, indexed
lover_two_id    | integer   | not null, foreign key, indexed

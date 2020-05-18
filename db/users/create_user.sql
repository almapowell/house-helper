INSERT INTO users (first_name, last_name, email, password, profile_pic, reviews)
VALUES ( ${first_name}, ${last_name}, ${email}, ${hash}, ${profile_pic}, ${reviews} )
returning *;
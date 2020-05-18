CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(60),
    email VARCHAR(50),
    password VARCHAR(100),
    profile_pic VARCHAR(MAX),
    reviews NUMERIC(1,2),
)





    
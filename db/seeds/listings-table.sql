CREATE TABLE listings (
    listing_id SERIAL PRIMARY KEY,
    user_id INT REFFERENCES users(id)
    title VARCHAR(20),
    category_name VARCHAR(30),
    posted_by VARCHAR(50),
    date_posted TIMESTAMP,
    description VARCHAR(400),
    price INT,
    price_firm BOOLEAN,
    equipment_needed TEXT[],
    tools_provided TEXT[],
    is_complete BOOLEAN,
    location VARCHAR(100),
    images TEXT[],
    recurring_service BOOLEAN,
)
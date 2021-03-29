CREATE DATABASE we_chat_app;

CREATE TABLE we_chat_user(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(150),
    password VARCHAR(150),
    confirm_password VARCHAR(150)
);
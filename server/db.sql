CREATE DATABASE we_chat_app;

CREATE TABLE we_chat_user(
    user_id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL,
    confirm_password VARCHAR(150) NOT NULL
);

INSERT INTO we_chat_user(
    first_name,
    last_name,
    email,
    password,
    confirm_password
) VALUES(
    'John',
    'Smith',
    'johns@test.com',
    '1234',
    '1234'
);
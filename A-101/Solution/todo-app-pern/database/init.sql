CREATE DATABASE captaindemirtodo;

\c captaindemirtodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
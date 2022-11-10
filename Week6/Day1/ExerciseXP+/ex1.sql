CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    last_name TEXT NOT NULL,
    first_name TEXT NOT NULL,
    birth_date DATE
)

INSERT INTO items
VALUES
    (DEFAULT, 'Marc','Benichou',02/11/1998),
    (2,'Large desk',300),
    (3,'Fan',80);
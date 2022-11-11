CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    birth_date DATE NOT NULL
);

INSERT INTO students
VALUES
    (DEFAULT, 'Marc', 'Benichou', '11/02/1998'),
    (DEFAULT, 'Yoan', 'Cohen', '12/03/2010'),
    (DEFAULT, 'Lea', 'Benichou', '07/27/1987'),
    (DEFAULT, 'Amelia', 'Dux', '04/07/1996'),
    (DEFAULT, 'David', 'Grez', '06/14/2003'),
    (DEFAULT, 'Marc', 'Simpson', '03/10/1980');
    

SELECT * FROM students

SELECT last_name,first_name  FROM students
-- Fetch the student which id is equal to 2.
SELECT last_name,first_name  FROM students WHERE id = 2
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT *  FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT *  FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
-- Fetch the students whose first_names contain the letter a.
SELECT * FROM students WHERE  first_name LIKE '%a%'
-- Fetch the students whose first_names start with the letter a.
SELECT * FROM students WHERE first_name LIKE 'A%'
-- Fetch the students whose first_names end with the letter a.
SELECT * FROM students WHERE first_name LIKE '%a'


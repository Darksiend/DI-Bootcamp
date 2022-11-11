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
    

SELECT  first_name, last_name, birth_date FROM students
-- Fetch the first four students. You have to order the four students alphabetically by last_name.
SELECT  first_name, last_name, birth_date FROM students ORDER BY last_name FETCH FIRST 4 ROW ONLY
-- Fetch the details of the youngest student.
SELECT * from students WHERE birth_date = (SELECT max(birth_date) FROM students)
-- Fetch three students skipping the first two students.
SELECT  * FROM students OFFSET 2 FETCH FIRST 3 ROW ONLY
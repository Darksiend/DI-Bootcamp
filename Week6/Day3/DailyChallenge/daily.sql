CREATE TABLE customer (id SERIAL PRIMARY KEY,
                                         first_name VARCHAR NOT NULL,
                                                            last_name VARCHAR NOT NULL);


CREATE TABLE customer_profile (id SERIAL PRIMARY KEY,
                                                 isLoggedIn BOOLEAN DEFAULT false,
                                                                            customer_id SERIAL REFERENCES customer(id));


INSERT INTO customer
VALUES (DEFAULT,
        'John',
        'Doe'),(DEFAULT,
                'Jerome',
                'Lalu'),(DEFAULT,
                         'Lea',
                         'Rive');


INSERT INTO customer_profile
VALUES (DEFAULT,
        true,
        1),(DEFAULT,
            false,
            2);


SELECT *
FROM customer;


SELECT *
FROM customer_profile;

-- The first_name of the LoggedIn customers

SELECT first_name,
       isloggedin
FROM customer_profile
INNER JOIN customer ON customer_profile.customer_id = customer.id
WHERE isloggedin = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

SELECT first_name,
       isloggedin
FROM customer
LEFT JOIN customer_profile ON customer_profile.customer_id = customer.id;

-- The number of customers that are not LoggedIn

SELECT first_name,
       isloggedin
FROM customer
RIGHT JOIN customer_profile ON customer_profile.customer_id = customer.id
WHERE customer_profile.isloggedin = false;

--PART2

CREATE TABLE Book(book_id SERIAL PRIMARY KEY,
                                         title VARCHAR NOT NULL,
                                                       author VARCHAR NOT NULL);


SELECT *
FROM Book;


INSERT INTO Book
VALUES (DEFAULT,
        'Alice In Wonderland',
        'Lewis Carroll'),(DEFAULT,
                          'Harry Potter',
                          'J.K Rowling'),(DEFAULT,
                                          'To kill a mockingbird',
                                          'Harper Lee');


SELECT *
FROM Book;


CREATE TABLE Student(student_id SERIAL PRIMARY KEY,
                                               name VARCHAR NOT NULL UNIQUE,
                                                                     age INTEGER, CHECK (age<=15));


INSERT INTO Student
VALUES (DEFAULT,
        'John',
        12),(DEFAULT,
             'Lera',
             11),(DEFAULT,
                  'Patrick',
                  10),(DEFAULT,
                       'Bob',
                       14);


SELECT *
FROM Student
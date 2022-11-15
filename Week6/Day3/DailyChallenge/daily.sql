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
INNEr JOIN customer ON customer_profile.customer_id = customer.id
WHERE isloggedin = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
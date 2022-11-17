-- Get a list of all film languages.

SELECT *
FROM language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

SELECT title AS film_title,
       description,
       name AS film_language
FROM film
INNER JOIN language ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages.

SELECT name
FROM language
LEFT JOIN film ON language.language_id = film.language_id
WHERE language.language_id NOT IN
                (SELECT language_id
                 FROM film);

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film (id SERIAL PRIMARY KEY,
                                         name VARCHAR NOT NULL);


INSERT INTO new_film
VALUES (DEFAULT,
        'First film'), (DEFAULT,
                        'Second Film');


CREATE TABLE customer_review
        (review_id SERIAL PRIMARY KEY,
                                  film_id SERIAL REFERENCES new_film(id) ON DELETE CASCADE,
                                                                                   language_id INTEGER REFERENCES language(language_id),
                                                                                                                  title TEXT NOT NULL,
                                                                                                                             score INTEGER,review_text TEXT,last_update DATE);


INSERT INTO customer_review
VALUES (DEFAULT,
        1,
        1,
        'My review',
        10,
        'Bla bla blaaaaa'),(DEFAULT,
                            2,
                            1,
                            'My Second review',
                            10,
                            'Bla bla blaaaaa Blaaaa')
SELECT *
FROM language;


SELECT *
from customer_review;


SELECT *
from new_film;


DELETE
FROM new_film
WHERE id = 2
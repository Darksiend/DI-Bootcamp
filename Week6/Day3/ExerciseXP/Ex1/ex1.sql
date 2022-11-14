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


SELECT *
FROM film;


UPDATE film
SET language_id = 2
WHERE film_id = 1;

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

DROP TABLE new_film;


DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

SELECT COUNT(*)
from rental
WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

SELECT DISTINCT film.title,
                film.rental_rate
FROM rental
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER  JOIN film ON inventory.film_id = film.film_id
WHERE return_date IS NULL
ORDER BY rental_rate DESC
LIMIT 30;
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

SELECT *
FROM rental
WHERE return_date IS NULL;


SELECT *
FROM payment;


SELECT *
from film;


SELECT rental.rental_id,
       payment_id,
       amount
FROM rental
INNER JOIN payment ON rental.rental_id = payment.rental_id
WHERE return_date IS NULL
ORDER BY amount DESC;


SELECT rental.rental_id,
       payment_id,
       amount
FROM rental
INNER JOIN film ON rental.rental_id = payment.rental_id
WHERE return_date IS NULL
ORDER BY amount DESC;
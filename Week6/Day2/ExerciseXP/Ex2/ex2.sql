--Ex2
-- In the dvdrental database write a query to select all the columns from the “customer” table.

SELECT *
FROM customer -- Write a query to display the names (first_name, last_name) using an alias named “full_name”.

SELECT first_name,
       last_name
FROM customer AS full_name -- Lets get all the dates that accounts were created. Write a query to select  all the create_date from the “customer” table (there should be no duplicates).

SELECT create_date
FROM customer -- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.

SELECT *
FROM customer
ORDER BY first_name DESC -- Write a query to get the film ID, title, description, year of  release and rental rate in ascending order according to their rental rate.

SELECT film_id,
       title,
       description,
       release_year,
       rental_rate
FROM film
ORDER BY rental_rate;


SELECT CUSTOMER.first_name,-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
 CUSTOMER.last_name,
 CUSTOMER.email,
 ADDRESS.phone,
 ADDRESS.address,
 ADDRESS.district
FROM customer as CUSTOMER,
     ADDRESS as address
WHERE district = 'Texas';


SELECT *
FROM film
WHERE film_id = 15
    or film_id = 150;

-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
--TODO

SELECT * -- Write a query which will find the 10 cheapest movies.
FROM film
ORDER BY rental_rate ASC FETCH FIRST 10 ROW ONLY;


SELECT * --Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
FROM film
ORDER BY rental_rate ASC
OFFSET 10 FETCH FIRST 10 ROW ONLY;
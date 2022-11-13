-- All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY item_price  ASC
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE item_price > 80 ORDER BY item_price  DESC 
-- The first 3 customers in alphabetical order of the first name (A-Z) – 
-- exclude the primary key column from the results.
SELECT * FROM customers ORDER BY costumer_first_name FETCH FIRST 3 ROW ONLY
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT costumer_last_name FROM  customers ORDER BY costumer_last_name DESC
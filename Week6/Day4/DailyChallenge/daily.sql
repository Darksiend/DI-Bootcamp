
CREATE TABLE product_orders(order_id SERIAL PRIMARY KEY,
                                                    shipper_id INTEGER, user_id INTEGER, tocity_id INTEGER, fromcity_id INTEGER);


CREATE TABLE items (item_id SERIAL PRIMARY KEY,
                                           item_name VARCHAR, fk_order_id INTEGER REFERENCES product_orders(order_id),
                                                                                             price INTEGER NOT NULL);


CREATE TABLE users (user_id SERIAL PRIMARY KEY,
                                           first_name VARCHAR NOT NULL,
                                                              last_name VARCHAR NOT NULL);


SELECT *
FROM product_orders;


INSERT INTO product_orders
VALUES (DEFAULT,
        1,
        1,
        2,
        1)
INSERT INTO product_orders
VALUES (DEFAULT,
        1,
        2,
        1);


SELECT *
FROM items;


INSERT INTO items
VALUES(DEFAULT,
       'MACBOOK',
       2,
       20000);


SELECT *
FROM product_orders;


SELECT *
FROM users;


INSERT INTO users
VALUES(DEFAULT,
       'Dima',
       'Chesnokov');


SELECT *
FROM items;


SELECT first_name,
       order_id,
       item_name,
       price
FROM users
INNER JOIN product_orders ON product_orders.user_id = users.user_id
INNER JOIN items ON product_orders.order_id = items.fk_order_id;


SELECT SUM(price)
FROM users
INNER JOIN product_orders ON product_orders.user_id = users.user_id
INNER JOIN items ON product_orders.order_id = items.fk_order_id
WHERE product_orders.user_id = 2
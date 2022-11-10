CREATE TABLE items(
    item_id INTEGER PRIMARY KEY,
    item_name TEXT NOT NULL,
    item_price INTEGER
)

INSERT INTO items
VALUES
    (1, 'Small Desk',100),
    (2,'Large desk',300),
    (3,'Fan',80);
    
CREATE TABLE customers(
    costumer_id INTEGER PRIMARY KEY,
    costumer_first_name TEXT NOT NULL,
    costumer_last_name TEXT NOT NULL
)

INSERT INTO customers
VALUES
    (1,'Greg','Jones'),
    (2,'Sandra','Jones'),
    (3,'Scott','Scott'),
    (4,'Trevor','Green'),
    (5,'Melanie','Johnson');


SELECT * FROM items 

SELECT * FROM items WHERE item_price > 80

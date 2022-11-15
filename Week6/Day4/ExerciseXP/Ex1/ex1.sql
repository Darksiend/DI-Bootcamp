-- Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.

SELECT first_name AS Frst,
       last_name AS Last
from employees;

-- Write a query to get unique departments ID from the employee table (ie. without duplicates).

SELECT DISTINCT department_id
from employees;

-- Write a query to get the details of all employees from the employee table, do so in descending order by first name.s

SELECT *
FROM employees
ORDER BY first_name DESC;

-- Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.

SELECT (first_name,
        last_name) AS fullname,
       salary,
       salary * 0.15 as PF
FROM employees;

-- Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.

SELECT (first_name,
        last_name) AS fullname,
       salary
FROM employees
ORDER BY salary;

-- Write a query to get the total sum of all salaries paid to the employees.

SELECT SUM(salary)
FROM employees;

-- Write a query to get the maximum and minimum salaries paid to the employees.

SELECT MAX(salary) AS max_salary,
       MIN(salary) AS min_salary
FROM employees;

-- Write a query to get the average salary paid to the employees.

SELECT AVG(salary) AS avg_salary
FROM employees;

--Write a query to get the number of employees working in the company.

SELECT COUNT(*)
FROM employees;

--Write a query to get all the first names from the employees table in upper case.

SELECT UPPER(first_name)
FROM employees;

--Write a query to get the first three characters of each first name of all the employees in the employees table.

SELECT LEFT(first_name,3)
FROM employees;

--Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.

SELECT (first_name,
        last_name) AS fullname
FROM employees;

--Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.

SELECT first_name ||' '|| last_name,
       LENGTH(first_name ||' '|| last_name) as fullname_length
FROM employees;

--Write a query to check whether the first_name column of the employees table contains any numbers.

SELECT (CASE
            WHEN first_name LIKE '%[^0-9.]%' THEN 'contains numbers'
            ELSE first_name
        END)
FROM employees;

--Write a query to select the first ten records from a table.

SELECT *
FROM employees
LIMIT 10;
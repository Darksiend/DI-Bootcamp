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
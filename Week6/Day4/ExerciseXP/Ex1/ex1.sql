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

-- Restricting And Sorting
 --1. Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.

SELECT first_name,
       last_name,
       salary
FROM employees
WHERE (salary > 10000
       and salary< 15000);

--2.Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.

SELECT first_name,
       last_name,
       hire_date
FROM employees
WHERE (hire_date >= '1987-01-01'
       and hire_date<= '1987-12-12');

--3. Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.

SELECT *
FROM employees
WHERE (first_name LIKE '%c%')
        and (first_name LIKE '%e%');

--4.Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.

SELECT last_name,
       job_title,
       department_name,
       salary
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id
INNER JOIN jobs ON employees.job_id = jobs.job_id
WHERE departments.department_name != 'IT'
        AND departments.department_name != 'Shipping';

--5.Write a query to display the last names of all employees whose last name contains exactly six characters.
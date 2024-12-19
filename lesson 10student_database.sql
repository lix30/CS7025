
DROP TABLE IF EXISTS students;


CREATE TABLE students (
    student_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    PRIMARY KEY (student_id)
);


INSERT INTO students (first_name, last_name, email) 
VALUES 
('Alice', 'Smith', 'alice.smith@example.com'),
('Bob', 'Johnson', 'bob.johnson@example.com');


SELECT * FROM students;


UPDATE students
SET email = 'new.email@example.com'
WHERE first_name = 'Alice';


DELETE FROM students
WHERE last_name = 'Johnson';

link：https://www.db-fiddle.com/f/iJeW4divMTgGSg7CuWqwzL/0#&togetherjs=bydxAl1fQp
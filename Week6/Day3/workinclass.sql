
CREATE TABLE DEPARTMENT (DEPTCODE INTEGER PRIMARY KEY,
                                                  DeptName CHAR(30),
                                                           LOCATION VARCHAR(33));


CREATE TABLE BOSS (boss_id SERIAL PRIMARY KEY,
                                          boss_name VARCHAR, boss_type VARCHAR, dept_number INTEGER,
                   FOREIGN KEY (dept_number) UNIQUE REFERENCES DEPARTMENT(DEPTCODE));
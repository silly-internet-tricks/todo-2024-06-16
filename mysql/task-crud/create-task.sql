USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE create_task(
  IN readable_name varchar(200),
  IN description varchar(2000),
  IN due_date datetime,
  IN creator_id int
)
BEGIN
INSERT INTO task VALUES (
  0,
  readable_name,
  description,
  NOW(),
  NOW(),
  due_date,
  NULL,
  creator_id,
  creator_id,
  0 -- 0 for false https://stackoverflow.com/a/289759/13920055
);
SELECT LAST_INSERT_ID();
END //
DELIMITER ;

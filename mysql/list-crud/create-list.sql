USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE create_list(
  IN readable_name varchar(200),
  IN description varchar(2000),
  IN creator_id int
)
BEGIN
INSERT INTO list VALUES (
  0,
  readable_name,
  description,
  NOW(),
  creator_id
);
SELECT LAST_INSERT_ID();
END //
DELIMITER ;

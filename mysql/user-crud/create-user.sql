USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE create_user(
  IN unique_name varchar(100),
  IN readable_name varchar(200),
  IN description varchar(2000),
  IN hashed_password varchar(600)
)
BEGIN
INSERT INTO user VALUES (
  0,
  unique_name,
  readable_name,
  description,
  hashed_password,
  NOW()
);
END //
DELIMITER ;

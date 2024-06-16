USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE validate_user_password(
  IN unique_name varchar(100),
  IN hashed_password varchar(600)
)
BEGIN
    SELECT * FROM user
    WHERE user.unique_name = unique_name
    AND user.hashed_password = hashed_password;
END //
DELIMITER ;
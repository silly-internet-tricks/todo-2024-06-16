USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE update_unique_username(
  IN id int,
  IN unique_name varchar(100)
)
BEGIN
    UPDATE user SET user.unique_name = unique_name
    WHERE user.id = id;
END //
DELIMITER ;
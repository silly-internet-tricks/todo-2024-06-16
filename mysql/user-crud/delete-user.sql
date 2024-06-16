USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE delete_user(
  IN id int
)
BEGIN
    DELETE from user WHERE user.id = id;
END //
DELIMITER ;
USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE update_user_description(
  IN id int,
  IN description varchar(1000)
)
BEGIN
    UPDATE user SET user.description = description
    WHERE user.id = id;
END //
DELIMITER ;
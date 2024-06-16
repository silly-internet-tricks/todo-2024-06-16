USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE update_user_password(
  IN id int,
  IN hashed_password varchar(600)
)
BEGIN
    UPDATE user SET user.hashed_password = hashed_password
    WHERE user.id = id;
END //
DELIMITER ;
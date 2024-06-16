USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE update_readable_username(
  IN id int,
  IN readable_name varchar(200)
)
BEGIN
    UPDATE user SET user.readable_name = readable_name
    WHERE user.id = id;
END //
DELIMITER ;
USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE read_all_user_lists(
  IN user_owner_id int
)
BEGIN
    SELECT * FROM list
    WHERE list.user_owner_id = user_owner_id;
END //
DELIMITER ;
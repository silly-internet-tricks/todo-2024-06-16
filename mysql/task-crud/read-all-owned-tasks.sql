USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE read_all_owned_tasks(
  IN owner_id int
)
BEGIN
    SELECT * FROM task
    WHERE task.owner_id = owner_id;
END //
DELIMITER ;
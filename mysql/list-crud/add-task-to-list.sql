USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE add_task_to_list(
  IN task_id int,
  IN list_id int
)
BEGIN
    INSERT INTO task_list VALUES (task_id, list_id, NOW());
END //
DELIMITER ;
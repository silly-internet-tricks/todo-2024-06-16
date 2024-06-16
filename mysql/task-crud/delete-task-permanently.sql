USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE delete_task_permanently(
  IN id int
)
BEGIN
    DELETE from task WHERE task.id = id;
END //
DELIMITER ;
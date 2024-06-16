USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE update_task_due_date(
  IN id int,
  IN due_date datetime
)
BEGIN
    UPDATE task SET task.due_date = due_date,
    last_modified_date = NOW()
    WHERE task.id = id;
END //
DELIMITER ;
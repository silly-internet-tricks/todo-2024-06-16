USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE reassign_task(
  IN id int,
  IN assignee_id int
)
BEGIN
    UPDATE task
    SET task.assignee_id = assignee_id,
    last_modified_date = NOW()
    WHERE task.id = id;
END //
DELIMITER ;
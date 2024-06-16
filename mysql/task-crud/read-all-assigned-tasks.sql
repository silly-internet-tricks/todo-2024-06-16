USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE read_all_assigned_tasks(
  IN assignee_id int
)
BEGIN
    SELECT * FROM task
    WHERE task.assignee_id = assignee_id;
END //
DELIMITER ;
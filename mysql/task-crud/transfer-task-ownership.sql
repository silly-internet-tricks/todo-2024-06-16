USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE transfer_task_ownership(
  IN id int,
  IN owner_id int
)
BEGIN
    UPDATE task SET task.owner_id = owner_id,
    last_modified_date = NOW()
    WHERE task.id = id;
END //
DELIMITER ;
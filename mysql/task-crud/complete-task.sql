USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE complete_task(
  IN id int
)
BEGIN
    UPDATE task SET task.completion_date = NOW()
    WHERE task.id = id;
END //
DELIMITER ;
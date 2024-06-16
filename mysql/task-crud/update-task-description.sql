USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE update_task_description(
  IN id int,
  IN description varchar(1000)
)
BEGIN
    UPDATE task SET task.description = description,
    last_modified_date = NOW()
    WHERE task.id = id;
END //
DELIMITER ;
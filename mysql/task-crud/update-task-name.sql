USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE update_task_name(
  IN id int,
  IN readable_name varchar(200)
)
BEGIN
    UPDATE task SET task.readable_name = readable_name,
    last_modified_date = NOW()
    WHERE task.id = id;
END //
DELIMITER ;
USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE read_list(
  IN id int
)
BEGIN
    SELECT * FROM list
    JOIN task_list ON task_list.list_id = id
    JOIN task ON task_list.task_id = task.id
    WHERE list.id = id;
END //
DELIMITER ;
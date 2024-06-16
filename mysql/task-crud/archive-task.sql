USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE archive_task(
  IN id int
)
BEGIN
    UPDATE task SET task.is_archived = 1 -- 1 for true. https://stackoverflow.com/a/289759/13920055
    WHERE task.id = id;
END //
DELIMITER ;
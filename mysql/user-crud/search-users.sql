USE todo_2024_06_16;
DELIMITER //
CREATE PROCEDURE search_users(
  IN search_term varchar(100)
)
BEGIN
    SELECT * FROM user
    WHERE user.unique_name LIKE CONCAT('%', search_term, '%')
    OR user.readable_name LIKE CONCAT('%', search_term, '%')
    OR user.description LIKE CONCAT('%', search_term, '%');
END //
DELIMITER ;
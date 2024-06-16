USE todo_2024_06_16;
CALL create_list ('katelynn list of tasks', 'josh douglas ( a list of important tasks )', 1);
CALL create_list ('josh list of tasks', 'josh douglas ( a list of urgent tasks )',  2);
CALL create_list ('josh2 list of tasks', 'josh ( a list of easy tasks )',  3);
CALL create_list ('josh3 list of tasks ', 'josh ( a list of really fun tasks! 😎)',  4);
CALL add_task_to_list (1, 1);
CALL add_task_to_list (2, 1);
CALL add_task_to_list (3, 3);
CALL add_task_to_list (4, 2);

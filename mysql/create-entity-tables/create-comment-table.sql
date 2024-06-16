USE todo_2024_06_16;
CREATE TABLE comment (
  `id` int primary key,
  `content` varchar(2000),
  `created_date` date,
  `last_modified_date` date,
  `task_id` int,
   foreign key (task_id) references task(id)
);
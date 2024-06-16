USE todo_2024_06_16;
CREATE TABLE comment (
  `id` int primary key auto_increment,
  `content` varchar(2000),
  `created_date` datetime,
  `last_modified_date` datetime,
  `task_id` int,
   foreign key (task_id) references task(id)
);
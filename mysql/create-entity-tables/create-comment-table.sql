CREATE TABLE comment (
  `id` int primary key,
  `content` varchar(2000),
  `created_date` date,
  `last_modified_date` date,
  `task_id` int foreign key references task(id)
);
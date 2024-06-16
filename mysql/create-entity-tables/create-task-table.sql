CREATE TABLE task (
  `id` int primary key,
  `readable_name` varchar(200),
  `description` varchar(2000),
  `created_date` date,
  `last_modified_date` date,
  `due_date` date,
  `completion_date` date,
  `assigned_to` int foreign key references user(id),
  `owned_by` int foreign key references user(id),
  `is_archived` boolean
);
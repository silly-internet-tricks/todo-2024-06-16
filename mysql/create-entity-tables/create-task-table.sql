USE todo_2024_06_16;
CREATE TABLE task (
  `id` int primary key auto_increment,
  `readable_name` varchar(200),
  `description` varchar(2000),
  `created_date` datetime,
  `last_modified_date` datetime,
  `due_date` datetime,
  `completion_date` datetime,
  `assigned_to` int,
  `owned_by` int,
  `is_archived` boolean,
   foreign key (assigned_to) references user(id),
   foreign key (owned_by) references user(id)
);
CREATE TABLE task (
  `id` int primary key,
  `readable_name` varchar(200),
  `description` varchar(2000),
  `created_date` date,
  `last_modified_date` date,
  `due_date` date,
  `completion_date` date,
  `assigned_to` int,
  `owned_by` int,
  `is_archived` boolean,
   foreign key (assigned_to) references user(id),
   foreign key (owned_by) references user(id)
);
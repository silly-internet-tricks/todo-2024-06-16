CREATE TABLE task_list (
  `task_id` int foreign key references task(id),
  `list_id` int foreign key references list(id),
  `date_added` date
);
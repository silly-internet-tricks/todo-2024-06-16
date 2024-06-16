CREATE TABLE task_list (
  `task_id` int,
  `list_id` int,
  `date_added` date,
   foreign key (task_id) references task(id),
   foreign key (list_id) references list(id)
);
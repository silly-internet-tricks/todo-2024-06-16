USE todo_2024_06_16;
CREATE TABLE task_list (
  `task_id` int not null,
  `list_id` int not null,
  `date_added` datetime,
   foreign key (task_id) references task(id),
   foreign key (list_id) references list(id)
);
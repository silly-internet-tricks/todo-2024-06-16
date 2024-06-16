USE todo_2024_06_16;
CREATE TABLE list_join (
  `list_id_1` int,
  `list_id_2` int,
  `date_added` datetime,
   foreign key (list_id_1) references list(id),
   foreign key (list_id_2) references list(id)
);
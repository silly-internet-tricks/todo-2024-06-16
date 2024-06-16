USE todo_2024_06_16; -- not even going to implement this for now
CREATE TABLE list_join (
  `list_id_1` int not null,
  `list_id_2` int not null,
  `date_added` datetime,
   foreign key (list_id_1) references list(id),
   foreign key (list_id_2) references list(id)
);
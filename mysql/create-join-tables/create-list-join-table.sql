CREATE TABLE list_join (
  `list_id_1` int foreign key references list(id),
  `list_id_2` int foreign key references list(id),
  `date_added` date
);
CREATE TABLE group_join (
  `group_id_1` int foreign key references group(id),
  `group_id_2` int foreign key references group(id),
  `date_added` date
);
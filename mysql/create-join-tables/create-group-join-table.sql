CREATE TABLE group_join (
  `group_id_1` int,
  `group_id_2` int,
  `date_added` date,
   foreign key (group_id_1) references user_group(id),
   foreign key (group_id_2) references user_group(id)
);
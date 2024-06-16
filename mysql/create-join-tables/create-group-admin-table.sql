USE todo_2024_06_16;
CREATE TABLE group_admin (
  `user_id` int,
  `group_id` int,
  `date_joined` date,
   foreign key (user_id) references user(id),
  foreign key (group_id) references user_group(id)
);
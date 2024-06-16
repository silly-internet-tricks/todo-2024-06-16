CREATE TABLE group_member (
  `user_id` int foreign key references user(id),
  `group_id` int foreign key references group(id),
  `date_joined` date
);
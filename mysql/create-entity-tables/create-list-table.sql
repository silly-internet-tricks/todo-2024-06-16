USE todo_2024_06_16;
CREATE TABLE list (
  `id` int primary key auto_increment,
  `readable_name` varchar(200),
  `description` varchar(2000),
  `created_date` date,
  `user_owner_id` int,
  foreign key (user_owner_id) references user(id)
  -- note: skipping the idea of lists owned by groups for now
);
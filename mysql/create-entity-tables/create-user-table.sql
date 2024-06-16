USE todo_2024_06_16;
CREATE TABLE user (
  `id` int auto_increment,
  `unique_name` varchar(100),
  `readable_name` varchar(200),
  `description` varchar(2000),
  `hashed_password` varchar(600),
  `join_date` datetime,
  primary key (id),
  unique (unique_name)
);
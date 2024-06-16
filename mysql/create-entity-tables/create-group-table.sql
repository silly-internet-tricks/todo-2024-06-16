USE todo_2024_06_16;
CREATE TABLE user_group (
  `id` int primary key auto_increment,
  `readable_name` varchar(200),
  `description` varchar(2000),
  `created_date` date
);
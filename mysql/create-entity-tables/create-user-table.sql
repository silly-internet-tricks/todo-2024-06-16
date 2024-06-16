USE todo_2024_06_16;
CREATE TABLE user (
  `id` int primary key,
  `unique_name` varchar(100),
  `readable_name` varchar(200),
  `description` varchar(2000),
  `hashed_password` binary(60),
  `join_date` date
);
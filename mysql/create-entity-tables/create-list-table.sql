USE todo_2024_06_16;
CREATE TABLE list (
  `id` int primary key,
  `readable_name` varchar(200),
  `description` varchar(2000),
  `created_date` date
);
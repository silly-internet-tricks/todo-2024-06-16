#!/bin/sh
export MYSQL_PWD=`cat secrets/mysql-password`
mysql < mysql/create-database.sql

mysql < mysql/grant.sql

mysql < mysql/create-entity-tables/create-user-table.sql
mysql < mysql/create-entity-tables/create-task-table.sql
mysql < mysql/create-entity-tables/create-list-table.sql
mysql < mysql/create-entity-tables/create-group-table.sql
mysql < mysql/create-entity-tables/create-comment-table.sql

mysql < mysql/create-join-tables/create-group-admin-table.sql
mysql < mysql/create-join-tables/create-group-join-table.sql
mysql < mysql/create-join-tables/create-group-member-table.sql
mysql < mysql/create-join-tables/create-list-join-table.sql
mysql < mysql/create-join-tables/create-task-list-table.sql

mysql < mysql/user-crud/create-user.sql
mysql < mysql/user-crud/read-all-users.sql
mysql < mysql/user-crud/search-users.sql
mysql < mysql/user-crud/delete-user.sql
mysql < mysql/user-crud/update-readable-username.sql
mysql < mysql/user-crud/update-unique-username.sql
mysql < mysql/user-crud/update-user-description.sql
mysql < mysql/user-crud/update-user-password.sql
mysql < mysql/user-crud/validate-user-password.sql

mysql < mysql/task-crud/archive-task.sql
mysql < mysql/task-crud/complete-task.sql
mysql < mysql/task-crud/create-task.sql
mysql < mysql/task-crud/delete-task-permanently.sql
mysql < mysql/task-crud/reassign-task.sql
mysql < mysql/task-crud/transfer-task-ownership.sql
mysql < mysql/task-crud/update-task-description.sql
mysql < mysql/task-crud/update-task-due-date.sql
mysql < mysql/task-crud/update-task-name.sql
mysql < mysql/task-crud/read-all-assigned-tasks.sql
mysql < mysql/task-crud/read-all-owned-tasks.sql

mysql < mysql/list-crud/add-list-to-list.sql
mysql < mysql/list-crud/add-task-to-list.sql
mysql < mysql/list-crud/create-list.sql
mysql < mysql/list-crud/read-all-user-lists.sql
mysql < mysql/list-crud/read-list.sql

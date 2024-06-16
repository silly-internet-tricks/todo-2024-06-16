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

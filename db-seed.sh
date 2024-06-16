#!/bin/sh
export MYSQL_PWD=`cat secrets/mysql-password`
mysql < mysql/seeding/seed-some-users.sql
mysql < mysql/seeding/seed-some-tasks.sql
mysql < mysql/seeding/seed-some-lists.sql

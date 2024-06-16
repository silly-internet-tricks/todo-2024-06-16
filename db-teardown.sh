#!/bin/sh
export MYSQL_PWD=`cat secrets/mysql-password`
mysql < mysql/drop-database.sql
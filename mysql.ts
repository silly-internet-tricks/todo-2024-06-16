import mysql from "mysql";
import dotenv from "dotenv";

const connection = mysql.createConnection({
  host: "localhost",
  user: "josh",
  password: dotenv["MYSQL_PASSWORD"],
  database: "todo_2024_06_16",
});

connection.connect();

const addListToList = () => {};

const addTaskToList = () => {};

const createList = () => {};

const readAllUserLists = () => {};

const readList = () => {};

const archiveTask = () => {};

const completeTask = () => {};

const createTask = () => {};

const deleteTaskPermanently = () => {};

const readAllAssignedTasks = () => {};

const readAllOwnedTasks = () => {};

const reassignTask = () => {};

const transferTaskOwnership = () => {};

const updateTaskDescription = () => {};

const updateTaskDueDate = () => {};

const updateTaskName = () => {};

const createUser = () => {};

const deleteUser = () => {};

const readAllUsers = () => {};

const searchUsers = () => {};

const updateReadableUsername = () => {};

const updateUniqueUsername = () => {};

const updateUserDescription = () => {};

const updateUserPassword = () => {};

const validateUserPassword = () => {};

connection.end();

export {
  addListToList,
  addTaskToList,
  createList,
  readAllUserLists,
  readList,
  archiveTask,
  completeTask,
  createTask,
  deleteTaskPermanently,
  readAllAssignedTasks,
  readAllOwnedTasks,
  reassignTask,
  transferTaskOwnership,
  updateTaskDescription,
  updateTaskDueDate,
  updateTaskName,
  createUser,
  deleteUser,
  readAllUsers,
  searchUsers,
  updateReadableUsername,
  updateUniqueUsername,
  updateUserDescription,
  updateUserPassword,
  validateUserPassword,
};

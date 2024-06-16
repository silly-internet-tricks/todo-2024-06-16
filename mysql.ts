import mysql from "mysql";
import dotenv from "dotenv";

const connection = mysql.createConnection({
  host: "localhost",
  user: "josh",
  password: dotenv["MYSQL_PASSWORD"],
  database: "todo_2024_06_16",
});

const promiseQuery = (queryString, paramArray) => {
  return new Promise((solve, ject) => {
    connection.query(queryString, paramArray, (error, results, fields) => {
      console.log(error, results, fields);
      if (error) ject(error);
      solve(results);
    });
  });
};

const connect = () => {
  return new Promise((solve, ject) => {
    connection.connect((err) => {
      if (err) ject(err);
      solve(connection.threadId);
    });
  });
};

const addListToList = async () => {
  throw "not implemented";
};

const addTaskToList = async (taskId: number, listId: number) => {
  if (!Number.isInteger(taskId)) throw "taskId must be integer";
  if (!Number.isInteger(listId)) throw "listId must be integer";
  return promiseQuery("CALL add_task_to_list (?, ?);", [taskId, listId]);
};

const createList = async (
  readableName: string,
  description: string,
  creatorId: number
) => {
  if (!Number.isInteger(creatorId)) throw "creatorId must be integer";
  return promiseQuery("CALL create_list (?, ?, ?);", [
    readableName,
    description,
    creatorId,
  ]);
};

const readAllUserLists = async (userOwnerId: number) => {
  if (!Number.isInteger(userOwnerId)) throw "userOwnerId must be integer";
  return promiseQuery("CALL read_all_user_lists (?)", [userOwnerId]);
};

const readList = async (id: number) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL read_list (?)", [id]);
};

const archiveTask = async (id: number) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL archive_task (?)", [id]);
};

const completeTask = async (id: number) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL complete_task (?)", [id]);
};

const createTask = async (
  readableName: string,
  description: string,
  dueDate: Date,
  creatorId: number
) => {
  if (!Number.isInteger(creatorId)) throw "creatorId must be integer";
  return promiseQuery("CALL create_task (?, ?, ?, ?)", [
    readableName,
    description,
    dueDate,
    creatorId,
  ]);
};

const deleteTaskPermanently = async (id: number) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL delete_task_permanently (?)", [id]);
};

const readAllAssignedTasks = async (assigneeId: number) => {
  if (!Number.isInteger(assigneeId)) throw "assigneeId must be integer";
  return promiseQuery("CALL read_all_assigned_tasks (?)", [assigneeId]);
};

const readAllOwnedTasks = async (ownerId: number) => {
  if (!Number.isInteger(ownerId)) throw "ownerId must be integer";
  return promiseQuery("CALL read_all_owned_tasks (?)", [ownerId]);
};

const reassignTask = async (id: number, assigneeId: number) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  if (!Number.isInteger(assigneeId)) throw "assigneeId must be integer";
  return promiseQuery("CALL reassign_task (?, ?)", [id, assigneeId]);
};

const transferTaskOwnership = async (id: number, ownerId: number) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  if (!Number.isInteger(ownerId)) throw "ownerId must be integer";
  return promiseQuery("CALL transfer_task_ownership (?, ?)", [id, ownerId]);
};

const updateTaskDescription = async (id: number, description: string) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL update_task_description (?, ?)", [id, description]);
};

const updateTaskDueDate = async (id: number, dueDate: Date) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL update_task_due_date (?, ?)", [id, dueDate]);
};

const updateTaskName = async (id: number, name: string) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL update_task_name (?, ?)", [id, name]);
};

const createUser = async (
  uniqueName: string,
  readableName: string,
  description: string,
  hashedPassword: string
) => {
  return promiseQuery("CALL create_user (?, ?, ?, ?)", [
    uniqueName,
    readableName,
    description,
    hashedPassword,
  ]);
};

const deleteUser = async (id: number) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL delete_user (?)", [id]);
};

const readAllUsers = async () => {
  return promiseQuery("CALL read_all_users", []);
};

const searchUsers = async (searchTerm: string) => {
  return promiseQuery("CALL search_users (?)", [searchTerm]);
};

const updateReadableUsername = async (id: number, name: string) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL update_readable_username (?, ?)", [id, name]);
};

const updateUniqueUsername = async (id: number, name: string) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL update_unique_username (?, ?)", [id, name]);
};

const updateUserDescription = async (id: number, description: string) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL update_user_description (?, ?)", [id, description]);
};

const updateUserPassword = async (id: number, hashedPassword: string) => {
  if (!Number.isInteger(id)) throw "id must be integer";
  return promiseQuery("CALL update_user_password (?, ?)", [id, hashedPassword]);
};

const validateUserPassword = async (
  uniqueName: string,
  hashedPassword: string
) => {
  return promiseQuery("CALL validate_user_password (?, ?)", [
    uniqueName,
    hashedPassword,
  ]);
};

const endConnection = () => {
  return new Promise<void>((solve, ject) => {
    connection.end((err) => {
      if (err) ject(err);
      solve();
    });
  });
};

export {
  connect,
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
  endConnection,
};

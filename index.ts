import { createServer } from "node:http";
import {
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
} from "./mysql";

createServer((req,res) => {
  
});

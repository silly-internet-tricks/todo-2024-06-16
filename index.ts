import { IncomingMessage, ServerResponse, createServer } from "node:http";
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
import { hash, check } from "./make-hash";

const userEndpoints = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) => {
  if (req.method === "POST") {
    req.on("data", async (data) => {
      const reqBody = JSON.parse(data.toString());
      console.log(reqBody);
      const { uniqueName, readableName, description, password } = reqBody;
      const hashedPassword = await hash(password);
      try {
        const newUserId = await createUser(
          uniqueName,
          readableName,
          description,
          hashedPassword
        );

        res.statusCode = 201;
        console.log(newUserId);

        res.end(JSON.stringify({ id: newUserId }));
      } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
          res.statusCode = 409;
          res.end(error.toString());
        }
      }
    });
  }
};

createServer((req, res) => {
  const { url, method } = req;
  console.log(url, method);
  if (url.match(/^\/user/)) {
    userEndpoints(req, res);
  } else {
    res.end(JSON.stringify(Object.keys(req)));
  }
}).listen(8484, () => {
  console.log("node js server started");
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endConnection = exports.validateUserPassword = exports.updateUserPassword = exports.updateUserDescription = exports.updateUniqueUsername = exports.updateReadableUsername = exports.searchUsers = exports.readAllUsers = exports.deleteUser = exports.createUser = exports.updateTaskName = exports.updateTaskDueDate = exports.updateTaskDescription = exports.transferTaskOwnership = exports.reassignTask = exports.readAllOwnedTasks = exports.readAllAssignedTasks = exports.deleteTaskPermanently = exports.createTask = exports.completeTask = exports.archiveTask = exports.readList = exports.readAllUserLists = exports.createList = exports.addTaskToList = exports.addListToList = exports.connect = void 0;
var mysql = require("mysql");
require("dotenv").config();
var connection = mysql.createConnection({
    host: "localhost",
    user: "josh",
    password: process.env["MYSQL_PASSWORD"],
    database: "todo_2024_06_16",
    charset: "utf8mb4",
});
var promiseQuery = function (queryString, paramArray) {
    return new Promise(function (solve, ject) {
        connection.query(queryString, paramArray, function (error, results, fields) {
            if (error)
                ject(error);
            var firstResult = results[0];
            var firstRowData = firstResult[0];
            var lastInsertId = firstRowData['LAST_INSERT_ID()'];
            solve(lastInsertId);
        });
    });
};
var connect = function () {
    return new Promise(function (solve, ject) {
        connection.connect(function (err) {
            if (err)
                ject(err);
            solve(connection.threadId);
        });
    });
};
exports.connect = connect;
var addListToList = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        throw "not implemented";
    });
}); };
exports.addListToList = addListToList;
var addTaskToList = function (taskId, listId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(taskId))
            throw "taskId must be integer";
        if (!Number.isInteger(listId))
            throw "listId must be integer";
        return [2 /*return*/, promiseQuery("CALL add_task_to_list (?, ?);", [taskId, listId])];
    });
}); };
exports.addTaskToList = addTaskToList;
var createList = function (readableName, description, creatorId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(creatorId))
            throw "creatorId must be integer";
        return [2 /*return*/, promiseQuery("CALL create_list (?, ?, ?);", [
                readableName,
                description,
                creatorId,
            ])];
    });
}); };
exports.createList = createList;
var readAllUserLists = function (userOwnerId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(userOwnerId))
            throw "userOwnerId must be integer";
        return [2 /*return*/, promiseQuery("CALL read_all_user_lists (?)", [userOwnerId])];
    });
}); };
exports.readAllUserLists = readAllUserLists;
var readList = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL read_list (?)", [id])];
    });
}); };
exports.readList = readList;
var archiveTask = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL archive_task (?)", [id])];
    });
}); };
exports.archiveTask = archiveTask;
var completeTask = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL complete_task (?)", [id])];
    });
}); };
exports.completeTask = completeTask;
var createTask = function (readableName, description, dueDate, creatorId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(creatorId))
            throw "creatorId must be integer";
        return [2 /*return*/, promiseQuery("CALL create_task (?, ?, ?, ?)", [
                readableName,
                description,
                dueDate,
                creatorId,
            ])];
    });
}); };
exports.createTask = createTask;
var deleteTaskPermanently = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL delete_task_permanently (?)", [id])];
    });
}); };
exports.deleteTaskPermanently = deleteTaskPermanently;
var readAllAssignedTasks = function (assigneeId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(assigneeId))
            throw "assigneeId must be integer";
        return [2 /*return*/, promiseQuery("CALL read_all_assigned_tasks (?)", [assigneeId])];
    });
}); };
exports.readAllAssignedTasks = readAllAssignedTasks;
var readAllOwnedTasks = function (ownerId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(ownerId))
            throw "ownerId must be integer";
        return [2 /*return*/, promiseQuery("CALL read_all_owned_tasks (?)", [ownerId])];
    });
}); };
exports.readAllOwnedTasks = readAllOwnedTasks;
var reassignTask = function (id, assigneeId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        if (!Number.isInteger(assigneeId))
            throw "assigneeId must be integer";
        return [2 /*return*/, promiseQuery("CALL reassign_task (?, ?)", [id, assigneeId])];
    });
}); };
exports.reassignTask = reassignTask;
var transferTaskOwnership = function (id, ownerId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        if (!Number.isInteger(ownerId))
            throw "ownerId must be integer";
        return [2 /*return*/, promiseQuery("CALL transfer_task_ownership (?, ?)", [id, ownerId])];
    });
}); };
exports.transferTaskOwnership = transferTaskOwnership;
var updateTaskDescription = function (id, description) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL update_task_description (?, ?)", [id, description])];
    });
}); };
exports.updateTaskDescription = updateTaskDescription;
var updateTaskDueDate = function (id, dueDate) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL update_task_due_date (?, ?)", [id, dueDate])];
    });
}); };
exports.updateTaskDueDate = updateTaskDueDate;
var updateTaskName = function (id, name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL update_task_name (?, ?)", [id, name])];
    });
}); };
exports.updateTaskName = updateTaskName;
var createUser = function (uniqueName, readableName, description, hashedPassword) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, promiseQuery("CALL create_user (?, ?, ?, ?)", [
                uniqueName,
                readableName,
                description,
                hashedPassword,
            ])];
    });
}); };
exports.createUser = createUser;
var deleteUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL delete_user (?)", [id])];
    });
}); };
exports.deleteUser = deleteUser;
var readAllUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, promiseQuery("CALL read_all_users", [])];
    });
}); };
exports.readAllUsers = readAllUsers;
var searchUsers = function (searchTerm) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, promiseQuery("CALL search_users (?)", [searchTerm])];
    });
}); };
exports.searchUsers = searchUsers;
var updateReadableUsername = function (id, name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL update_readable_username (?, ?)", [id, name])];
    });
}); };
exports.updateReadableUsername = updateReadableUsername;
var updateUniqueUsername = function (id, name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL update_unique_username (?, ?)", [id, name])];
    });
}); };
exports.updateUniqueUsername = updateUniqueUsername;
var updateUserDescription = function (id, description) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL update_user_description (?, ?)", [id, description])];
    });
}); };
exports.updateUserDescription = updateUserDescription;
var updateUserPassword = function (id, hashedPassword) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!Number.isInteger(id))
            throw "id must be integer";
        return [2 /*return*/, promiseQuery("CALL update_user_password (?, ?)", [id, hashedPassword])];
    });
}); };
exports.updateUserPassword = updateUserPassword;
var validateUserPassword = function (uniqueName, hashedPassword) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, promiseQuery("CALL validate_user_password (?, ?)", [
                uniqueName,
                hashedPassword,
            ])];
    });
}); };
exports.validateUserPassword = validateUserPassword;
var endConnection = function () {
    return new Promise(function (solve, ject) {
        connection.end(function (err) {
            if (err)
                ject(err);
            solve();
        });
    });
};
exports.endConnection = endConnection;

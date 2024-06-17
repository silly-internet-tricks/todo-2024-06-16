"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.hash = void 0;
var bcrypt = require("bcrypt");
var saltRounds = 10;
var hash = function (password) {
    return new Promise(function (solve, ject) {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err)
                ject(err);
            solve(hash);
        });
    });
};
exports.hash = hash;
var check = function (password, hash) {
    return new Promise(function (solve, ject) {
        bcrypt.compare(password, hash, function (err, result) {
            if (err)
                ject(err);
            solve(result);
        });
    });
};
exports.check = check;

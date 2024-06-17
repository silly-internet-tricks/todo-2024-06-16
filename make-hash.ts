import bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = (password: string) => {
  return new Promise<string>((solve, ject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) ject(err);
      solve(hash);
    });
  });
};

const check = (password: string, hash: string) => {
  return new Promise((solve, ject) => {
    bcrypt.compare(password, hash, function (err, result) {
      if (err) ject(err);
      solve(result);
    });
  });
};

export { hash, check };

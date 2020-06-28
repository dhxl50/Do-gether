const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const app = express();

const port = process.env.PORT || 5000;

const saltRounds = 10;

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
// connection.connect();
function handleDisconnect() {
  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 4000);
    }
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      return handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "asdjha!@#@#$dd",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60, // 쿠키 유효기간 24시간
    },
  })
);

app.get("/api/cards", (req, res) => {
  connection.query("SELECT * FROM CARDINFO", (err, rows, fields) => {
    // console.log(rows);
    res.send(rows);
  });
});

app.post("/api/addcard", (req, res) => {
  const data = req.body;
  const sql =
    "INSERT INTO CARDINFO(isPublic,name,date,time,title,todo,ck) VALUES(?,?,?,?,?,?,?);";

  const params = [
    data.isPublic,
    data.name,
    data.date,
    data.time,
    data.title,
    data.todo,
    data.ck,
  ];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      res.send({
        code: 400,
        message: "error",
      });
    } else {
      res.send({
        code: 200,
        message: "success",
      });
    }
  });
});

app.put("/api/updatecard", (req, res) => {
  const data = req.body;
  const sql = `UPDATE CARDINFO SET title="${data.title}",todo="${data.todo}",ck="${data.ck}" WHERE name="${data.name}" AND date="${data.date}" AND time="${data.time}";`;
  console.log(sql);
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      res.send({
        code: 400,
        message: "error",
      });
    } else {
      res.send({
        code: 200,
        message: "success",
      });
    }
  });
});

app.delete("/api/deletecard", (req, res) => {
  const data = req.body;
  const sql = `DELETE FROM CARDINFO WHERE name="${data.name}" AND date="${data.date}" AND time="${data.time}";`;

  connection.query(sql, (err, rows, fields) => {
    if (err) {
      res.send({
        code: 400,
        message: "error",
      });
    } else {
      res.send({
        code: 200,
        message: "success",
      });
    }
  });
});

app.post("/api/signup", async (req, res) => {
  const data = req.body;
  const sql = "INSERT INTO USERINFO(userID,userPW,userName) VALUES(?,?,?);";

  await bcrypt.hash(data.userPW, saltRounds, function (err, hash) {
    let params = [data.userID, hash, data.userName];
    connection.query(sql, params, (err, rows, fields) => {
      if (err) {
        res.send({
          code: 400,
          message: "Change ID or NickName",
        });
      } else {
        res.send({
          code: 200,
          message: "success",
        });
      }
    });
  });
});

app.post("/auth/login", (req, res) => {
  const data = req.body;
  const enteredID = data.userID;
  const enteredPW = data.userPW;
  connection.query(
    "SELECT * FROM USERINFO WHERE userID = ?",
    [enteredID],
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          message: "error ocurred",
        });
      } else {
        if (results.length > 0) {
          bcrypt.compare(enteredPW, results[0].userPW, function (err, check) {
            if (check) {
              req.session.userName = results[0].userName;
              console.log(req.session.userName + "is login");
              res.send({
                code: 200,
                message: "login sucessfull",
                username: results[0].userName,
              });
            } else {
              res.send({
                code: 204,
                message: "Id and password does not match.",
              });
            }
          });
        } else {
          res.send({
            code: 204,
            message: "Id does not exists",
          });
        }
      }
    }
  );
});

app.get("/auth/logout", async (req, res, next) => {
  console.log(req.session.userName + "is logout");
  req.session.destroy();
  res.clearCookie("sid");
  res.redirect("/");
});

app.get("/auth", (req, res) => {
  try {
    if (req.session.userName) {
      res.send({
        message: "Authenticated user",
      });
    } else {
      console.log("Unauthorized access");
      res.send({
        message: "Unauthenticated user",
      });
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));

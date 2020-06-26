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
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "asdjha!@#@#$dd",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/api/cards", (req, res) => {
  connection.query("SELECT * FROM CARDINFO", (err, rows, fields) => {
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
});

app.post("/api/login", (req, res) => {
  const data = req.body;
  const enteredID = data.userID;
  const enteredPW = data.userPW;
  connection.query(
    "SELECT * FROM USERINFO WHERE userID = ?",
    [enteredID],
    function (error, results, fields) {
      if (error) {
        // console.log("error ocurred", error);
        res.send({
          code: 400,
          message: "error ocurred",
        });
      } else {
        // console.log('The solution is: ', results);
        if (results.length > 0) {
          bcrypt.compare(enteredPW, results[0].userPW, function (err, check) {
            console.log(check);
            if (check) {
              req.session.userName = results[0].userName;
              console.log(req.session.userName);
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
app.listen(port, () => console.log(`Listening on port ${port}`));

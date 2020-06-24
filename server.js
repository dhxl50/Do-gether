const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;

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

app.get("/api/cards", (req, res) => {
  connection.query("SELECT * FROM CARDINFO", (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/addcard", (req, res) => {
  const data = req.body;
  const sql = "INSERT INTO CARDINFO(isPublic,name,date,time,title,todo,ck) VALUES(?,?,?,?,?,?,?);";
  const params =[data.isPublic,data.name,data.date,data.time,data.title,data.todo,data.ck];
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

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const mysql = require('mysql');

const port = process.env.PORT || 5000;

/*
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/cards", (req, res) => {
  res.send([
    {
      date: "2020-99-99",
      name: "daehwi",
      isPublic: true,
      title: "열글자까지가능합니다.",
      todo: ["휴대폰하기", "리액트하기", "옾소과제"],
    },
    {
      date: "2020-99-99",
      name: "fuck",
      isPublic: true,
      title: "열글자까지가능합니다.",
      todo: ["헬스", "낮잠", "확랜과제"],
    },
    {
      date: "2020-99-99",
      name: "talk",
      isPublic: true,
      title: "열글자까지가능할걸요.",
      todo: ["카톡", "라인", "페메","DM"],
    },
    {
      date: "2020-99-99",
      name: "성훈정",
      isPublic: true,
      title: "하나둘셋넷다섯여섯일.",
      todo: ["쌍쌍바ㅏ", "비비빅", "메로나"],
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

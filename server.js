const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/cards", (req, res) => {
  res.send([
    {
      date: "2020-99-99",
      name: "daehwi",
      isPublic: true,
      title: "열글자까지가능합니다.",
      todo: ["응가하기", "똥싸기", "변누기"],
    },
    {
      date: "2020-99-99",
      name: "fuck",
      isPublic: true,
      title: "열글자까지가능합니다.",
      todo: ["응가하다말기", "똥싸기", "변누기"],
    },
    {
      date: "2020-99-99",
      name: "성훈",
      isPublic: true,
      title: "열글자까지가능할걸요.",
      todo: ["응가하면서폰보기", "똥싸기", "변누기"],
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

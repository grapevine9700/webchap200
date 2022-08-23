import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("되어서");
});

app.listen(port, () => {
  console.log(`서버실행 ${port}`);
});

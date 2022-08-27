import express from "express";

const app = express();
const port = 3000;

const mechanic = [
  { id: 1, name: "바보", model: "CORN-1234" },
  { id: 2, name: "Harris", model: "Johnson-0077" },
  { id: 3, name: "농가물", model: "소복녀-1155" }
];

app.get("/mechanic", (req, res) => {
  res.json(mechanic);
});

app.listen(port, () => {
  console.log(`서버실행(${port})`);
});

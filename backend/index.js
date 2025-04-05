const express = require("express");
const PORT = 4000;

const app = express();

app.get("/posts", (req, res) => {
  return res.status(200).json({ message: "Working from backend " });
});

app.listen(PORT, () => {
  console.log(`ÀPP IS RUNNING ON : ${PORT}`);
});

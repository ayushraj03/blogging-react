const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(logger("dev"));

app.get("/login", (req, res) => {
  res.json({ message: "Hello from server!" });
  console.log(res);
});

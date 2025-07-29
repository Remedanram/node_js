const express = require("express");
const app = express();

app.use(express.json()); // to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("HELLLOOO FROM THE EXPRESS!");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

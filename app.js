const express = require("express");
const app = express();

const bookRoutes = require("./routes/book.routes");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.use("/api/books", bookRoutes);

app.use("/api/students", studentRoutes); // Mount the student routes

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

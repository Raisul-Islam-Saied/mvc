const express = require("express");
const app = express();
const PORT = 300;
const usersRouter = require("./routes/users.route");

app.use(express.urlencoded({ extended: true }));
app.use(usersRouter);
app.listen(PORT, () => {
  console.log(`your server is running at http://localhost:${PORT}`);
});

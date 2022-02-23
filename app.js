const express = require("express");
const sequelize = require("./db/db");
const todoRouter = require("./routes/todo.router");
const userRouter = require("./routes/user.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("app ready");
    app.listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
})();
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRouter = require("./routes/workout");
const userRouter = require("./routes/user");
const cors = require("cors");

// express app
const app = express();
// cors
app.use(cors());

// middelwear
app.use(express.json());
const port = process.env.PORT || 4000;


app.use((req, res, next) => {
  // console.log(req.path,req.method);
  next();
});
// routes
app.use("/api/workout", workoutRouter);
app.use("/api/user", userRouter);
// connect to db
mongoose
  .connect(process.env.mongo_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(
        "connected to mogodb successfully and app listening at",
        port
      );
    });
  })
  .catch(() => {
    console.log(error);
  });

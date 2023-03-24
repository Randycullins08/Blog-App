require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/blogs", blogRoutes);
app.use("/", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Connected to DB & Listening on port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log("Error connecting database: ", err);
  });

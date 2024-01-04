require("dotenv").config();

//library
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const recipeRoutes = require("./routes/recipes");

//express app
const app = express();

//middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//routes
app.use("/api/recipes", recipeRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to database and listen to ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

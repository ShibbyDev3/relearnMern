require(`dotenv`).config();

const express = require(`express`);
const mongoose = require(`mongoose`);
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect("mongodb+srv://netNinja:2yM2pYmxmGDjqxj6@shibbydata.xqkzcnr.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to db listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

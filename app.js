const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.static(path.join(__dirname, "build")));

//convert data to json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.pluralize(null);

//import routers
const liftRoute = require("./routes/liften");
const liftHistoryRoute = require("./routes/liftHistory");

//use routers
app.use("/api/liften", liftRoute);
app.use("/api/liftenhistory", liftHistoryRoute);

//react routing
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

connectDb();

async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}

app.listen(process.env.PORT || 8000);

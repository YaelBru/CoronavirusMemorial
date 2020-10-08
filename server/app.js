const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConfig = require("./database/database.js");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Connection to MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database Connected!");
    },
    (error) => {
      console.log("Database Not Connected" + error);
    }
  );

//Routes
const memorialRoute = require("./routes/memorial.route");
const tributesRoute = require("./routes/tributes.route");

app.use("/api/v1/memorial", memorialRoute);
app.use("/api/v1/candles", tributesRoute)

//
app.use(express.static(__dirname + "/dist/browser"));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/browser/index.html"));
});

// Create port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Error Handling
app.use(function (err, req, res, next) {
  err.message = err.message || err.error.message;
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

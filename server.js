//Dependencies
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

//Port declartation
const PORT = process.env.PORT ||3000;

const app = express();
// Log all changes to output
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allows usage of static files on a server
app.use(express.static("public"));
// Utilize mongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budgetSave", {
useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

// Routes import
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const homepageRoute = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homepageRoute);

let port =
  process.env.port === null || process.env.port === ""
    ? 3210
    : process.env.port;
app.listen(port);

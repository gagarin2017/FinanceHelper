const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
    res.render("home", {
      pageTitle: "Finance Helper",
      path: "/",
    });
});

module.exports = homeRouter;

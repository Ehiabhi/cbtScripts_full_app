const express = require("express");
const passport = require("passport");
const router = express.Router();
// const Users = require("../models/Users");

router.get("/", function (req, res) {
  res.send("You're in the logout page");
});

router.get("/", (req, res, next) => {
  req.logout();
  // console.log(req.body);
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    // res.redirect("/");
  });
});

module.exports = router;

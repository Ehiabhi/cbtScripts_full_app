const express = require("express");
const passport = require("passport");
const router = express.Router();
// const Users = require("../models/Users");

router.get("/", function (req, res) {
  res.send("You're in the login page");
});

router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/" }),
  (req, res, next) => {
    req.session.save((err) => {
      if (err) {
        return next(err);
      }
      // console.log("Authenticated");
      // res.redirect("/");
    });
  }
);

router.post("/logout", (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;

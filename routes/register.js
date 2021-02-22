var express = require("express");
var router = express.Router();
var User = require("../models/Users");

router.get("/", function (req, res) {
  res.send("You're in the register page");
});

router.post("/", function (req, res) {
  const data = req.body;
  User.register(
    {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    data.password,
    function (err) {
      if (err) {
        console.log("error while user register!", err);
        // implement redirect users to login page to try again
        throw err;
      } else {
        console.log("User registered");
        return res.sendStatus(200);
      }
    }
  );
});

// const newUser = new User({
//   firstName: data.firstName,
//   lastName: data.lastName,
//   email: data.email,
//   password: data.password,
// });

// newUser.save((err) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   } else {
//     console.log("Saved successfully");
//     return res.sendStatus(200);
//   }
// });

module.exports = router;

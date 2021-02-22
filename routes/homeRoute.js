var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Home routing successful");
});

module.exports = router;

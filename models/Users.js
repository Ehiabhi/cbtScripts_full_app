var mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  firstName: "string",
  lastName: "string",
  email: "string",
  password: "string",
});

userSchema.plugin(passportLocalMongoose, {
  selectFields: "firstName lastName",
  usernameField: "email",
});

const User = (module.exports = mongoose.model("User", userSchema));

const { body } = require("express-validator");

const loginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email field is required.")
    .isEmail()
    .withMessage("Please enter valid email address."),
  body("password")
    .notEmpty()
    .withMessage("Password field is required.")
    .isLength({
      min: 8,
    })
    .withMessage("Password should be at least 8 characters."),
];

module.exports = loginValidator;

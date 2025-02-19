const { body } = require("express-validator");

const forgotPasswordValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email field is required.")
    .isEmail()
    .withMessage("Please enter valid email address."),
];

module.exports = forgotPasswordValidator;

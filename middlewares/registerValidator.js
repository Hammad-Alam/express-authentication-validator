const { body } = require("express-validator");

const registerValidator = [
  // Validation for incoming request data (name, email, password)
  body("username")
    .notEmpty()
    .withMessage("Username field is required.")
    .isLength({ min: 3 })
    .withMessage("Username should be at least 3 characters long.")
    .trim(),
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
    .withMessage("Password should be at least 8 characters.")
    .matches(/.*[a-z].*/)
    .withMessage("Password should contain at least one lowercase letter.") // at least one lowercase letter
    .matches(/.*[A-Z].*/)
    .withMessage("Password should contain at least one uppercase letter.") // at least one uppercase letter
    .matches(/.*[0-9].*/)
    .withMessage("Password should contain at least one numeric value."), // at least one number
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password field is required.")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),
];

module.exports = registerValidator;

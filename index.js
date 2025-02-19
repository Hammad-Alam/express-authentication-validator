const registerValidator = require("./middlewares/registerValidator");
const loginValidator = require("./middlewares/loginValidator");
const forgotPasswordValidator = require("./middlewares/forgotPasswordValidator");
const customValidator = require("./middlewares/customValidator");
const loginRateLimiter = require("./middlewares/loginRateLimiter");
const errorHandler = require("./middlewares/errorHandler");

module.exports = {
  registerValidator,
  loginValidator,
  forgotPasswordValidator,
  customValidator,
  loginRateLimiter,
  errorHandler,
};

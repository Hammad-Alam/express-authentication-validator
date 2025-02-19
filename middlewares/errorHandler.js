const { validationResult } = require("express-validator");

// Middleware to handle validation errors from express-validator
const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0];
    return res.status(400).json({
      error: firstError.msg,
      field: firstError.path,
    });
  }
  next();
};

module.exports = errorHandler;

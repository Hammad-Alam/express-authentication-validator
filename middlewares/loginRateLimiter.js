const rateLimit = require("express-rate-limit");
const logger = require("./logger");

const errorMessage = "Too many login attempts, please try again later.";

const loginRateLimiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 5, // Limit each IP to 5 login attempts per windowMs
  message: errorMessage,
  handler: (req, res, next) => {
    // Custom error handling
    res.status(429).json({
      error: "Too many login attempts",
      message: errorMessage,
    });
    logger.error(`Rate limiting exceeded for IP ${req.ip}`);
  },
});

module.exports = loginRateLimiter;

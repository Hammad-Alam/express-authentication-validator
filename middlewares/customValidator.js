const { check } = require("express-validator");

const customValidator = (rules) => {
  return Object.keys(rules).map((field) =>
    check(field)
      [rules[field].method](...rules[field].args)
      .withMessage(rules[field].message)
  );
};

module.exports = customValidator;

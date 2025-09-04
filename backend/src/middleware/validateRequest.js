const { validationResult } = require('express-validator');

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extracted = errors.array().map(err => ({ [err.param]: err.msg }));
    return res.status(400).json({ errors: extracted });
  }
  next();
}

module.exports = validateRequest;


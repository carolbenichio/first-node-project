const crypto = require('crypto');

module.exports = (length) => {
  const token = crypto.randomBytes(length / 2).toString('hex');
  return token;
};
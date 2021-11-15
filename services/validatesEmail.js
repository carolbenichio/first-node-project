const { EMAIL_REQUIRED, EMAIL_FORMAT } = require('../errors');
const { error } = require('../middlewares/error');

module.exports = (email) => {
  if (!email) throw error(EMAIL_REQUIRED);
  const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (!regex.test(email)) throw error(EMAIL_FORMAT);
  return true;
};
const { PASSWORD_REQUIRED, PASSWORD_FORMAT } = require('../errors');
const { error } = require('../middlewares/error');

module.exports = (password) => {
  if (!password) throw error(PASSWORD_REQUIRED); 
  if (password.length < 6) throw error(PASSWORD_FORMAT);
  return true;
};
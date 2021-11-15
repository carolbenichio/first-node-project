const EMAIL_REQUIRED = {
  status: 400,
  message: 'O campo "email" é obrigatório',
};

const EMAIL_FORMAT = {
  status: 400,
  message: 'O "email" deve ter o formato "email@email.com"',
};

const PASSWORD_REQUIRED = {
  status: 400,
  message: 'O campo "password" é obrigatório',
};

const PASSWORD_FORMAT = {
  status: 400,
  message: 'O "password" deve ter pelo menos 6 caracteres',
};

module.exports = {
  EMAIL_REQUIRED,
  EMAIL_FORMAT,
  PASSWORD_REQUIRED,
  PASSWORD_FORMAT,
};
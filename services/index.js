const validatesEmail = (req, res, next) => {
  const { email } = req.body;
  const validEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } if (!validEmail.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

const validatesPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  } 
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

const validatesTalkersName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) { 
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validatesTalkersAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) { 
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const validatesTalkersTalkKeys = (req, res, next) => {
  const { talk } = req.body;
  const validDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!talk || !talk.watchedAt) {
    return res.status(400).json(
      { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
    );
  }
  if (!validDate.test(talk.watchedAt)) { 
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  
  next();
};

const validatesRateTalk = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;

  if (!rate && rate !== 0) {
    return res.status(400).json(
      { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
    );
  }
  
  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};

module.exports = {
  validatesEmail,
  validatesPassword,
  validatesTalkersName,
  validatesTalkersAge,
  validatesTalkersTalkKeys,
  validatesRateTalk,
};
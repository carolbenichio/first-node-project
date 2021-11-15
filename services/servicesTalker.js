const { readFile, writeFile } = require('../utils');

const getAllTalkers = async (_req, res) => {
  const readFileParse = await readFile();
  res.status(200).json(readFileParse);
};

const getTalkerById = async (req, res) => {
  const readFileParse = await readFile();
  const { id } = req.params;
  const findById = readFileParse.find((t) => t.id === +id);
  return findById ? res.status(200).json(findById)
  : res.status(404).json({
    message: 'Pessoa palestrante não encontrada',
  });
};

// const generateToken = (_req, res) => {
//   const token = crypto.randomBytes(8).toString('hex');
  
//   return res.status(200).json({ token });
// };

const createTalker = async (req, res) => {
  const readFileParse = await readFile();
  const { name, age, talk } = req.body;
  const id = readFileParse.length + 1;

  writeFile([...readFileParse, { id, name, age, talk }]);

  return res.status(201).json({ id, name, age, talk });
};

const updateTalker = async (req, res) => {
  const readFileParse = await readFile();
  const { id } = req.params;
  const { name, age, talk } = req.body;
  
  const findIndexById = readFileParse.findIndex((t) => t.id === +id);
  
  readFileParse[findIndexById] = { id: Number(id), name, age, talk };
  
  writeFile(readFileParse);

  return res.status(200).json(readFileParse[findIndexById]);
};

const deleteTalker = async (req, res) => {
  const readFileParse = await readFile();
  const { id } = req.params;
  const removedTalker = readFileParse.filter((t) => t.id !== +id);

  writeFile(removedTalker);

  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

const searchTalker = async (req, res) => {
  const readFileParse = await readFile();
  const { q } = req.query;
  const lowerSearchTerm = q.toLowerCase();
  const searchedTalkers = readFileParse
    .filter((e) => e.name.toLowerCase().includes(lowerSearchTerm));

  if (!searchedTalkers) return res.status(200).send([]);

  return res.status(200).json(searchedTalkers);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  // generateToken,
  createTalker,
  updateTalker,
  deleteTalker,
  searchTalker,
};
const { readFile, writeFile } = require('../utils');

const CURRENT_FILE = 'talker.json'

const getAllTalkers = async () => {
  const readFileParse = await readFile(CURRENT_FILE);
  return readFileParse;
};

const getTalkersById = async (req, res) => {
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

const createsTalker = async (req, res) => {
  const readFileParse = await readFile();
  const { name, age, talk } = req.body;
  const id = readFileParse.length + 1;

  writeFile([...readFileParse, { id, name, age, talk }]);

  return res.status(201).json({ id, name, age, talk });
};

const updatesTalker = async (req, res) => {
  const readFileParse = await readFile();
  const { id } = req.params;
  const { name, age, talk } = req.body;
  
  const findIndexById = readFileParse.findIndex((t) => t.id === +id);
  
  readFileParse[findIndexById] = { id: Number(id), name, age, talk };
  
  writeFile(readFileParse);

  return res.status(200).json(readFileParse[findIndexById]);
};

const deletesTalker = async (req, res) => {
  const readFileParse = await readFile();
  const { id } = req.params;
  const removedTalker = readFileParse.filter((t) => t.id !== +id);

  writeFile(removedTalker);

  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

const searchTalkers = async (q) => {
  const file = await readFile();
  const lower = q.toLowerCase();
  const searchedTalkers = file.filter((e) => e.name.toLowerCase().includes(lower));

  if (!searchedTalkers) return [];
  return searchedTalkers;
};

module.exports = {
  getAllTalkers,
  getTalkersById,
  createsTalker,
  updatesTalker,
  deletesTalker,
  searchTalkers,
};
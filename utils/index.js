const fs = require('fs/promises');

const readFile = async () => {
  const readTalker = await fs.readFile('talker.json', 'utf8');
  const file = JSON.parse(readTalker);
  return file;
};

const writeFile = async (data) => {
  const writeTalker = await fs.writeFile('talker.json', JSON.stringify(data));
  return writeTalker; 
};

module.exports = {
  readFile,
  writeFile,
};
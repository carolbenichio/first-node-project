const fs = require('fs/promises');

const readFile = async (file) => {
  const readTalker = await fs.readFile(file, 'utf8');
  const fileOK = JSON.parse(readTalker);
  return fileOK;
};

const writeFile = async (data) => {
  const writeTalker = await fs.writeFile('talker.json', JSON.stringify(data));
  return writeTalker; 
};

module.exports = {
  readFile,
  writeFile,
};
const express = require('express');
const rescue = require('express-rescue');
const { getToken } = require('../middlewares/index');
const {
  getAllTalkers,
  getTalkerById, 
  generateToken,
  createTalker, 
  updateTalker, 
  deleteTalker,
  searchTalker } = require('../controllers');
  
const { 
  validatesEmail,
  validatesPassword,
  validatesTalkersName,
  validatesTalkersAge,
  validatesTalkersTalkKeys,
  validatesRateTalk } = require('../services');
    
const router = express.Router();

router.get('/talker/search?', rescue(getToken), rescue(searchTalker));

router.get('/talker/:id', rescue(getTalkerById));

router.delete('/talker/:id', getToken, deleteTalker);

router.put('/talker/:id',
  rescue(getToken),
  rescue(validatesTalkersName),
  rescue(validatesTalkersAge),
  rescue(validatesTalkersTalkKeys),
  rescue(validatesRateTalk),
  rescue(updateTalker));

router.post('/talker',
  rescue(getToken),
  rescue(validatesTalkersName),
  rescue(validatesTalkersAge),
  rescue(validatesTalkersTalkKeys),
  rescue(validatesRateTalk),
  rescue(createTalker));

router.post('/login', rescue(validatesEmail), rescue(validatesPassword), rescue(generateToken));

router.get('/talker', rescue(getAllTalkers));
  
module.exports = router;
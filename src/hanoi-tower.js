//const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  //throw new CustomError('Not implemented');
  let result = {};
  result.turns = 2**disksNumber - 1;
  result.seconds = Math.floor((3600 / turnsSpeed) * result.turns);
  
  return result;
};

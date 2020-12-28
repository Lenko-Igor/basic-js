const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  throw new CustomError('Not implemented');
  return arr.map(elem => {
    return (typeof elem === 'string')? elem.trim().slice(0,1).toUpperCase() :
    false;
  }).sort().join('');
};

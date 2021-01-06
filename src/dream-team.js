const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  try {
    if(arr){
      let result = arr.map(elem => {
        return (typeof elem === 'string')? elem.trim().slice(0,1).toUpperCase() :
        false;
      }).sort();
      return result.filter(e => {
        return (e)? true : false;
      }).join('');
    }else{
      throw new CustomError('Not implemented')
    }
  }
  catch(err){
    return false;
  }
};

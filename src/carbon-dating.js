const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  
  throw new CustomError('Not implemented');
  if(typeof str === 'string'  && +str%1 === 0 && +str !== 0){
    return Math.ceil(Math.log(MODERN_ACTIVITY/+str)/(0.693 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};

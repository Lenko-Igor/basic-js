const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let array = [];

    arr.forEach(e => {
      if(Array.isArray(e)){
        if(e.length === 0){
          e[0] = 1;
          array = array.concat(e);  
        }else{
          array = array.concat(e);
        }
      }
    })
   
    if(array.length === 0){
      return 1;
    } else {
      return 1 + this.calculateDepth(array);
    }
  }
};
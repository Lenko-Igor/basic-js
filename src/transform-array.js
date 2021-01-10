const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr)){
      let result = [];
    
      arr.forEach((e,i) => {
        if (arr[i+1] === '--discard-prev'){
          e = false;
          arr[i+1] = false;
        } else if(e === '--discard-next'){
          e = false;
          arr[i+1] = false;
        }else if(e === '--double-next' && arr[i+1]){
          result.push(arr[i+1]);
        } else if(e === '--double-prev' && arr[i-1]){
          result.push(arr[i-1]);
        } else if(e === '--double-next' || e === '--double-prev' || e === '--discard-prev'){
          e = false;
        } else if(e){
          result.push(e);
        }
      })
  
      return result;      
    } else {
      throw new CustomError('Not implemented');
  }
};

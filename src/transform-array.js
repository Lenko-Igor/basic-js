const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        return error;
      }else{
        let result = [];
    
        arr.forEach((e,i) => {
          if(e === '--double-next'){
            result.push(arr[i+1]);
          } else if(e === '--double-prev'){
            result.push(result[result.length-1]);
          } else if(arr[i+1] === '--discard-prev'){
            result.push(undefined);
          } else if(arr[i-1] === '--discard-next'){
            result.push(undefined);
          } else {
            result.push(e);
          }
        })
    
        return result.filter(e => {
            if(e !== undefined && e !== '--discard-prev' && e !== '--discard-next'){
              return true;
            }else{
              return false;
            }
          });
      }

};

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let addition = [];
  
  if(options.addition !== undefined){
    if(options.additionRepeatTimes){
      for(i=0; i < options.additionRepeatTimes; i++){
        addition.push(String(options.addition));
      }
    }else{
      addition.push(String(options.addition));
    }
  }

  (options.additionSeparator)? addition = addition.join(options.additionSeparator) : addition = addition.join('|');
  
  let result = [];
   
  if(options.repeatTimes){
    for(i=0; i < options.repeatTimes; i++){
      result.push(String(str) + addition);
    }
   }else{
    result.push(String(str) + addition);
   } 

  return (options.separator)? result.join(options.separator) : result.join('+'); 
};
  
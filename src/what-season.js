const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date){
    if(isNaN(date.getTime())){ 
      throw new CustomError('Unable to determine the time of year!'); 
    } else {
      let month = date.getMonth();

      return (month >= 2 && month <= 4)? 'spring' :
      (month > 4 && month <= 7)? 'summer' : 
      (month > 7 && month <= 10)? 'autumn' : 'winter';
    }
  } else {
    return 'Unable to determine the time of year!';
  }
}
  // catch(err){
  //   return (date)? err : err.message;
  // }
  // try {
  //   if(date === undefined || typeof date !== 'object' || Object.keys(date).length !== 0){ throw new CustomError('Unable to determine the time of year!'); }

  //   let month = date.getMonth();

  //   return (month >= 2 && month <= 4)? 'spring' :
  //   (month > 4 && month <= 7)? 'summer' : 
  //   (month > 7 && month <= 10)? 'autumn' : 'winter';
  // }
  // catch(err){
  //   return (date)? err : err.message;
  // }
//};


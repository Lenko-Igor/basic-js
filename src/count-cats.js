const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = [];
  arr.forEach(elem => {
    elem.forEach(e => {
      if(e === '^^'){
          result.push(e);
        }
    })
  })
  return result.length;
};

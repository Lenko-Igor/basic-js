const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value : [],
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.value.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    (value !== undefined)? this.value.push(value) : this.value.push(' ');
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(position%1 === 0 && position > 0 && typeof position !== 'string'){
      this.value.splice(position - 1, 1);
      return this;
    } else {
      return error;
    }

  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.value.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let result = '';
    this.value.forEach((e, i) => {
      if(i === 0){
        result = result + `( ${e} )`;
      } else {
        result = result + `~~( ${e} )`;
      }

    })
    this.value = [];
    return result;
  }
};

module.exports = chainMaker;

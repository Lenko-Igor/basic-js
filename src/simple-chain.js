const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink(v) {
    arguments.length > 0 ? this.value.push(String(v)) : this.value.push(" ");
    return this;
  },
  removeLink(position) {
    if (position % 1 === 0 && position > 0 && typeof position !== "string") {
      this.value.splice(position - 1, 1);
      return this;
    } else {
      this.value = [];
      throw new Error("Error");
    }
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    this.value.forEach((e, i) => {
      if (i === 0) {
        result = result + `( ${e} )`;
      } else {
        result = result + `~~( ${e} )`;
      }
    });
    this.value = [];
    return result;
  },
};


module.exports = chainMaker;

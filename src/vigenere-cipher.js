const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  // encrypt() {
  //   throw new CustomError('Not implemented');
  //   // remove line with error and write your code here
  // }    
  // decrypt() {
  //   throw new CustomError('Not implemented');
  //   // remove line with error and write your code here
  // }
  constructor(status = true){
    this.flag = status;
    this.abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  }
  encrypt(message, key) {
    let reKey = this.toRemakeKey(message.toLowerCase().split(' ').join(''), key.toLowerCase()); 
    let numStr = this.getNumber(message.toLowerCase().split(' ').join(''));
    let numKey = this.getNumber(reKey);

    let resultArray = numStr.map((e,i) => {
      if(typeof e === 'number'){
        let sum = e + numKey[i];

        if(sum >= 26){
          return this.abc[sum - 26].toUpperCase();
        }else{
          return this.abc[sum].toUpperCase();
        }
      }else{
        return e;
      }

    });

    if(this.flag){
      return message.split(' ').map(e => {
        return e = resultArray.splice(0, e.length).join('');
      }).join(' '); 
    } else {
      return message.split(' ').map(e => {
        return e = resultArray.splice(0, e.length).reverse().join('');
      }).reverse().join(' ');  
    }
  }    
  decrypt(encryptedMessage , key) {
    let reKey = this.toRemakeKey(encryptedMessage.toLowerCase().split(' ').join(''), key.toLowerCase()); 
    let numStr = this.getNumber(encryptedMessage.toLowerCase().split(' ').join(''));
    let numKey = this.getNumber(reKey);
    let resultArray = numStr.map((e,i) => {
      if(typeof e === 'number'){
        let sum = e - numKey[i];
        
        if(sum < 0){
          return this.abc[e + 26 - numKey[i]].toUpperCase();
        }else{
          return this.abc[sum].toUpperCase();
        }
      }else{
        return e;
      }

    });

    if(this.flag){
      return encryptedMessage.split(' ').map(e => {
        return e = resultArray.splice(0, e.length).join('');
      }).join(' '); 
    } else {
      return encryptedMessage.split(' ').map(e => {
        return e = resultArray.splice(0, e.length).reverse().join('');
      }).reverse().join(' ');  
    }
  }
  toRemakeKey(str, key){
    if(key.length >= str.length){
      return key.slice(0, str.length);
    }else{
      let newKey = key + key;
      return this.toRemakeKey(str, newKey)
    }
  }
  getNumber(str){
    return [...str].map(e => {
      this.abc.forEach((elem, i) => {
        if(e === elem){
          e = i;
        }
      })
      return e;
    });
  }
}

module.exports = VigenereCipheringMachine;



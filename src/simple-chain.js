const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const isValid = this.chain.some((_, index) => position - 1 === index);
    if (isValid) {
      this.chain = this.chain.filter((_, index) => index !== position - 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const totalChain = this.chain.join('~~');
    this.chain.length = 0;
    return totalChain;
  }
};

module.exports = {
  chainMaker
};

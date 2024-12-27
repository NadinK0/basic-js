const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('').map((el) => +el);

  const tempArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const newArr = arr.slice();
    newArr[i] = '';
    tempArr.push(newArr.join(''));
  }

  return (Math.max(...tempArr));
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let j = 0;
  matrix.forEach((el) => {
    for(let i = j; i < el.length; i += 1) {
      if (j === el.length - 1 && el.length !==1) {
        return;
      }
      if(el[i] !== 0) {
        sum += el[i];
      } else {
        j += 1;
      }
    } 
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

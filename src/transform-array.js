const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    const newArr = arr.slice();
    newArr.forEach((el, index) => {
      if (el === '--double-next') {
        newArr[index] = newArr[index + 1]
      }
      if (el === '--double-prev') {
        newArr[index] = newArr[index - 1]
      }
      if (el === '--discard-next') {
        newArr[index] = '';
        newArr[index + 1] = ''
      }
      if (el === '--discard-prev') {
        newArr[index] = '';
        newArr[index - 1] = '';
      } 
    })
      return newArr.filter((el) => el !== '' && el !== undefined);
  }
}

module.exports = {
  transform
};

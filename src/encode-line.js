const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  let count = 1;
  str.split('').map((el, index, arr) => {
    if  (el === arr[index + 1]) {
      count += 1;
    } else {
      if (count !== 1) {
        res.push(count);
      }
      res.push(el);
      count = 1;
    }
  });
  return res.join('');
}

module.exports = {
  encodeLine
};

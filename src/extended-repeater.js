const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionSeparator = typeof options.additionSeparator != 'undefined' ? options.additionSeparator : '|';
  const separator = typeof options.separator != 'undefined' ? options.separator : '+';
  const addition = typeof options.addition != 'undefined' ? options.addition : '';
  let newStr = '';
  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i += 1) {
      newStr += addition + additionSeparator;
    }
  }
  newStr = str + newStr + addition;
  let res = '';
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes - 1; i += 1) {
      res += newStr + separator;
    }
  }

  return res + newStr;
}

module.exports = {
  repeater
};

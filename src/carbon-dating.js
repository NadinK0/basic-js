const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = Math.log2(2) / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log2(MODERN_ACTIVITY / sampleActivity) / k)
  if (!isNaN(t) && t !== Infinity && t !== NaN && t >= 0 && typeof sampleActivity === 'string') {
    return t;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  let arr = [];
  let num =0;
  matrix.forEach(el => {
    arr = [...arr, ...el];
  });
  console.log('arr', arr);
  arr.forEach(el => {
    if (el === '^^'){
      num++;
    }
  })

  return num;
}

console.log('countCats', countCats([
  ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
  [2, NaN, "", false, "^^", "^^"],
  [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
  ["."],
  [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
  [false, NaN, 1, 0, ".", "^^"],
  [null, 1, NaN],
  [],
]))

module.exports = {
  countCats
};

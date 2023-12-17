const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const nonNegativeNumbers = arr.filter(num => num !== -1);
    nonNegativeNumbers.sort((a, b) => a - b);
    console.log('nonNegativeNumbers', nonNegativeNumbers)
    let resultIndex = 0;
    return arr.map(num => (num === -1 ? num : nonNegativeNumbers[resultIndex++]));
}


console.log( 'sortByHeight', sortByHeight( [ -1, 150, 190, 170, -1, -1, 160, 180 ] ) )
module.exports = {
    sortByHeight
};

const { NotImplementedError } = require( '../extensions/index.js' );

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
function deleteDigit( n ) {
    console.log('n', typeof n);
    const nStr = n.toString();
    let smallest = Number( nStr[0]);

    if ( nStr.length === 2 ) {
        return Number(nStr[0]);
    }
    for ( let i = 0; i < nStr.length - 1; i++ ) {
        if ( Number( nStr[i] < smallest )) {
            smallest = Number(nStr[i]);
        }
    }
    return Number(nStr.replace(smallest.toString(), ''));

}

console.log('deleteDigit', deleteDigit(342))

module.exports = {
    deleteDigit
};

const { NotImplementedError } = require( '../extensions/index.js' );

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
function getMatrixElementsSum( matrix ) {
    let sum = 0;
    const indexToMove = matrix[0].length
    let newArr = [];
    let toMinesNums = [];
    matrix.forEach( el => {
        newArr = [ ...newArr, ...el ];
    } );
    newArr.forEach( ( el, index ) => {
        if ( el === 0 ) {
            toMinesNums.push( index + indexToMove );
            toMinesNums.push( index + indexToMove * (matrix.length - 1) );
        }
    } )
    newArr.forEach( ( el, index ) => {
        if ( !toMinesNums.includes( index ) ) {
            sum += el;
        }
    } )
    console.log( 'toMinesNums', toMinesNums )
    return sum;

}

console.log( 'getMatrixElementsSum', getMatrixElementsSum( [
    [ 1 ],
    [ 5 ],
    [ 0 ],
    [ 2 ],
] ) )
module.exports = {
    getMatrixElementsSum
};

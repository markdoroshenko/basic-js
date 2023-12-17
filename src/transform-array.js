const { NotImplementedError } = require( '../extensions/index.js' );

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
function transform( arr ) {
    if ( !Array.isArray( arr ) ) {
        throw new Error( "\'arr\' parameter must be an instance of the Array!" )
    }
    let newArr = [];
    debugger;
    for ( let index = 0; index < arr.length; index++ ) {
        const el = arr[index];
        if ( el === '--discard-prev' ) {
            if ( index !== 0 ) {
                newArr.splice( index - 1, 1 );
            }
        } else if ( el === '--discard-next' ) {
            if ( index !== arr.length - 1 ) {
                index++;
            }
        } else if ( el === '--double-prev' ) {
            if ( arr[index - 2] !== '--discard-next' &&  index !== 0  ) {
                newArr.push( arr[index - 1] );
            }

        } else if ( el === '--double-next' ) {
            if ( index !== arr.length - 1 ) {
                newArr.push( arr[index + 1] );
            }

        } else {
            newArr.push( el );
        }
    }
    return newArr;

}

console.log( 'transform', transform( ['--discard-prev', 1, 2, 3] ) )

module.exports = {
    transform
};

const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
    if ( typeof s1 !== 'string' || typeof s2 !== 'string' ) {
        return false;
    }

    let res = 0;
    const arr1 = Array.from( s1 );
    const arr2 = Array.from( s2 );

    const recursDel = ( arr1, arr2 ) => {
        if ( arr1.length === 0 || arr2.length === 0 ) {
            return;
        }

        const el = arr1[0];

        if ( arr2.includes( el ) ) {
            res++;
            arr1.splice( arr1.indexOf( el ), 1 );
            arr2.splice( arr2.indexOf( el ), 1 );
            recursDel( arr1, arr2 );
        }

        recursDel( arr1.slice( 1 ), arr2 );
    };

    recursDel( arr1, arr2 );
    return res;
}

console.log( 'getCommonCharacterCount', getCommonCharacterCount( 'a', 'b' ) );

module.exports = {
    getCommonCharacterCount
};

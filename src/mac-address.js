const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
    let countHyphens = 0;
    for ( let i = 0; i < n.length; i++ ) {
        if ( n[i] === '-' ) {
            countHyphens++
        }
    }
    if (countHyphens !== 5) {
        console.log('countHyphens !== 5', countHyphens !== 5);
        return false;
    }
    const chars = [ '0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
    const str = n.split( '-' ).join( '' );
    for ( let i = 0; i < str.length; i++ ) {
        if ( !chars.includes( str[i] ) ) {
            console.log('str[i]', str[i])
            console.log('!chars.includes( str[i] )', !chars.includes( str[i] ))
            return false
        }
    }
    console.log( str )
    return true
}

console.log( isMAC48Address( '00-1B-63-84-45-E6' ) )
module.exports = {
    isMAC48Address
};

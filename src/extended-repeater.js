const { NotImplementedError } = require( '../extensions/index.js' );

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
function repeater( str, options ) {
    const strIn = typeof str === 'string' ? str : String( str );
    let separator = options.separator ? options.separator : '+';
    let addSeparator = options.additionSeparator ? options.additionSeparator : '|';
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let addRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let addition = '';
    if ( options.hasOwnProperty('addition') ) {
        for ( let i = 0; i < addRepeatTimes; i++ ) {
            if ( i === addRepeatTimes - 1 ) {
                addition += options.addition
            } else {
                addition += `${ options.addition }${ addSeparator }`;
            }
        }
    }
    let res = '';
    for ( let i = 0; i < repeatTimes; i++ ) {
        debugger
        if ( i === repeatTimes - 1 ) {
            res += `${ strIn }${ addition }`;
        } else {
            res += `${ strIn }${ addition }${ separator }`;
        }
    }
    return res;
}

console.log( 'repeater', repeater( 'la', { repeatTimes: 3 } ) )
module.exports = {
    repeater
};

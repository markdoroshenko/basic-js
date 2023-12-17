const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
    if (!Array.isArray(members)){
        return false
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let initials = '';
    let res = '';
    const trimmed = members.map( el => {
        if (typeof el === 'string') {
           return el.trim().toUpperCase();
        }

    } )
    console.log('trimmed', trimmed)
    trimmed.forEach( el => {
        if ( el && alphabet.includes( el[0] ) ) {
            initials += el[0];
        }
    } )
    return initials.split('').sort().join('');

}

console.log( 'createDreamTeam', createDreamTeam( [
    '   William Alston ',
    ' Paul Benacerraf',
    '  Ross Cameron',
    '       Gilles Deleuze',
    '  Arda Denkel ',
    '  Michael Devitt',
    '  Kit Fine',
    ' Nelson Goodman',
    'David Kolb',
    '   Saul Kripke',
    '  Trenton Merricks',
    '  Jay Rosenberg',
] ) )


console.log()
module.exports = {
    createDreamTeam
};

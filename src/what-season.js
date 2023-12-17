const { NotImplementedError } = require( '../extensions/index.js' );
function isValidDate(date) {
    return date instanceof Date && Object.getPrototypeOf(date) === Object.getPrototypeOf(new Date());
}
/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason( date ) {
    if ( !date ) {
        return 'Unable to determine the time of year!'
    }
    if ( typeof date !== 'object' || !(date instanceof Date) ) {
        throw new Error( 'Invalid date!' );
    }

    try {
        date.getTimezoneOffset();
    } catch ( e ) {
        throw new Error( 'Invalid date!' );
    }

    let res = '';
    const dateStr = date.toString();
    const indStart = dateStr.indexOf( ' ' ) + 1;
    const indEnd = indStart + 3;
    const month = dateStr.slice( indStart, indEnd ).toString();
    // console.log( 'month', typeof new Date() );
    const obj = {
        'DecJanFeb': 'winter',
        'MarAprMay': 'spring',
        'JunJulAug': 'summer',
        'SepOctNov': 'autumn',
    }
    Object.keys( obj ).forEach( el => {
        if ( el.includes( month ) ) {
            res = obj[el];
        }
    } )
    console.log('res', res)
    return res;
}

module.exports = {
    getSeason
};

const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
    let longestEl = [];
    let res = {};
    const domReverse = domains.map( el => {
        if ( el.length > longestEl.length ) {
            longestEl = el;
        }
        return `.${el.split( '.' ).reverse().join( '.' )}`;
    } )

    domains.forEach( el => {
        let base = '';
        let newArrEl = el.split( '.', ).reverse();
        newArrEl.forEach( ( el, index = 0 ) => {
            el = `${ base }.${ newArrEl[index] }`;
            base = el;
            res[el] = 0;
        } )
    } )

    let keysArr = Object.keys(res);
    domReverse.forEach( ( el ) => {
        keysArr.forEach((key) => {
            if(el.includes(key)) {
                res[key] = res[key] + 1;
            }
        })
    } )
    return res;
}

console.log( 'get', getDNSStats( [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
] ) )

module.exports = {
    getDNSStats
};

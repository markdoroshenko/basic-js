const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
    let resArr = [];
    let resArr2 = [];
    let obj = {};
    const sortedArr = Array.from(new Set( str ));
    console.log('sortedArr', sortedArr)
    sortedArr.forEach(el=> {
        obj[el] = 1;
    })
    for ( let i = 1; i < str.length; i++ ) {
        if (str[i] === str[i - 1]) {
            obj[str[i]] += 1;
        }
    }
    console.log('obj', obj)
    for (let i = 0; i < str.length; i++) {

        if (obj[str[i]] > 1) {
            resArr.push(`${obj[str[i]]}${str[i]}`)
        } else {
            resArr.push(`${str[i]}`)
        }
    }
    console.log('resArr', resArr)
    resArr.forEach(el=>{
        if (el === resArr2[resArr2.length -1]) {
           return;
        } else {
            resArr2.push(el)
        }
    })
    console.log('resArr2', resArr2)

    return resArr2.join('');
}

// function encodeLine(str) {
//     let encodedStr = '';
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             encodedStr += (count > 1 ? count : '') + str[i];
//             count = 1;
//         }
//     }
//     return encodedStr;
// }

console.log( 'encodeLine', encodeLine( 'aaaatttt' ) )

module.exports = {
    encodeLine
};

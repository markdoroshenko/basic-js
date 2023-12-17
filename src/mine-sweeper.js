const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
    const indexToMove = matrix[0].length
    let combinedMatrix = [];
    let mineIndex = [];
    let elemsNearMine = [];
    let numbers = [];
    let numbersYY = [];

    matrix.forEach( el => {
        combinedMatrix = [ ...combinedMatrix, ...el ];
    } );
    combinedMatrix.forEach( (el, index) => {
        if ( el ) {
            mineIndex.push( index )
        }
    } );

    console.log('combinedMatrix',combinedMatrix)
    combinedMatrix.forEach( ( el, index ) => {
        if ( el ) {
            if ( !mineIndex.includes( index + 1 ) && index + 1 > 0 && index + 1 < combinedMatrix.length ) {
                elemsNearMine.push( index + 1 )
                console.log('index + 1', index + 1)
                console.log(el)
            }
            if ( !mineIndex.includes( index - 1 ) && index - 1 > 0 && index - 1 < combinedMatrix.length ) {
                elemsNearMine.push( index - 1 )
                console.log('index - 1', index - 1)
                console.log(el)
            }
            if ( !mineIndex.includes( index + indexToMove ) && index + indexToMove > 0 && index + indexToMove < combinedMatrix.length ) {
                elemsNearMine.push( index + indexToMove )
                console.log('index + indexToMove', index + indexToMove)
                console.log(el)
            }
            if ( !mineIndex.includes( index - indexToMove ) && index - indexToMove > 0 && index - indexToMove < combinedMatrix.length ) {
                elemsNearMine.push( index - indexToMove )
                console.log('index - indexToMove', index - indexToMove)
                console.log(el)
            }
            if ( !mineIndex.includes( index - indexToMove - 1 ) && index - indexToMove - 1 > 0 && index - indexToMove - 1 < combinedMatrix.length ) {
                elemsNearMine.push( index - indexToMove - 1 )
                console.log('index - indexToMove - 1', index - indexToMove - 1)
                console.log(el)
            }
            if ( !mineIndex.includes( index - indexToMove + 1 ) && index - indexToMove + 1 > 0 && index - indexToMove + 1 < combinedMatrix.length ) {
                elemsNearMine.push( index - indexToMove + 1 )
                console.log('index - indexToMove + 1', index - indexToMove + 1)
                console.log(el)
            }
            if ( !mineIndex.includes( index + indexToMove - 1 ) && index + indexToMove - 1 > 0 && index + indexToMove - 1 < combinedMatrix.length && index + indexToMove - 1 !== indexToMove -1) {
                elemsNearMine.push( index + indexToMove - 1 )
                console.log('index + indexToMove - 1', index + indexToMove - 1)
                console.log(el)
            }
            if ( !mineIndex.includes( index + indexToMove + 1 ) && index + indexToMove + 1 > 0 && index + indexToMove + 1 < combinedMatrix.length ) {
                elemsNearMine.push( index + indexToMove + 1 )
                console.log('index + indexToMove + 1', index + indexToMove + 1)
                console.log(el)
            }

        }
    } )
    matrix.forEach( el => {
        el.forEach( elem => {
            if ( !elem ) {
                numbersYY.push( 0 )
            } else {
                numbersYY.push( 1 )
            }
        } );
    } );
    console.log( 'numbersYY', numbersYY )
    console.log( 'elemsNearMine', elemsNearMine )
    console.log( 'mineIndex', mineIndex )
    elemsNearMine.forEach( ( el, index ) => {
            numbersYY[el]++
    } )

    return numbersYY.reduce( (prev, currentValue ) => {
        if(prev.length === 0){
            return [[currentValue]]
        }
        if(prev[prev.length - 1] && prev[prev.length - 1].length < indexToMove) {
            prev[prev.length - 1].push(currentValue)
            return prev;
        }
        if(prev[prev.length - 1] && prev[prev.length - 1].length === indexToMove) {
            return [
                ...prev,
                [currentValue]
            ]
        }
        return prev;
    }, [] );;
}

console.log( 'minesweeper', minesweeper( [
    [ true, false, false ],
    [ false, true, false ],
    [ false, false, false ]
] ) )

module.exports = {
    minesweeper
};


// const indexToMove = matrix[0].length
// let newArr = [];
// let elemsNearMine = [];
// let numbers = [];
// let numbersYY = [];
// let mineIndex = [];
// matrix.forEach( el => {
//     newArr = [ ...newArr, ...el ];
// } );
// newArr.forEach( (el, index) => {
//     if ( el ) {
//         mineIndex.push( index )
//     }
// } );
//
// console.log('newArr',newArr)
// newArr.forEach( ( el, index ) => {
//     if ( el ) {
//         if ( !mineIndex.includes( index + 1 ) && index + 1 > 0 && index + 1 < newArr.length ) {
//             elemsNearMine.push( index + 1 )
//             console.log('index + 1', index + 1)
//             console.log(el)
//         }
//         if ( !mineIndex.includes( index - 1 ) && index - 1 > 0 && index - 1 < newArr.length ) {
//             elemsNearMine.push( index - 1 )
//             console.log('index - 1', index - 1)
//             console.log(el)
//         }
//         if ( !mineIndex.includes( index + indexToMove ) && index + indexToMove > 0 && index + indexToMove < newArr.length ) {
//             elemsNearMine.push( index + indexToMove )
//             console.log('index + indexToMove', index + indexToMove)
//             console.log(el)
//         }
//         if ( !mineIndex.includes( index - indexToMove ) && index - indexToMove > 0 && index - indexToMove < newArr.length ) {
//             elemsNearMine.push( index - indexToMove )
//             console.log('index - indexToMove', index - indexToMove)
//             console.log(el)
//         }
//         if ( !mineIndex.includes( index - indexToMove - 1 ) && index - indexToMove - 1 > 0 && index - indexToMove - 1 < newArr.length ) {
//             elemsNearMine.push( index - indexToMove - 1 )
//             console.log('index - indexToMove - 1', index - indexToMove - 1)
//             console.log(el)
//         }
//         if ( !mineIndex.includes( index - indexToMove + 1 ) && index - indexToMove + 1 > 0 && index - indexToMove + 1 < newArr.length ) {
//             elemsNearMine.push( index - indexToMove + 1 )
//             console.log('index - indexToMove + 1', index - indexToMove + 1)
//             console.log(el)
//         }
//         if ( !mineIndex.includes( index + indexToMove - 1 ) && index + indexToMove - 1 > 0 && index + indexToMove - 1 < newArr.length && index + indexToMove - 1 !== indexToMove -1) {
//             elemsNearMine.push( index + indexToMove - 1 )
//             console.log('index + indexToMove - 1', index + indexToMove - 1)
//             console.log(el)
//         }
//         if ( !mineIndex.includes( index + indexToMove + 1 ) && index + indexToMove + 1 > 0 && index + indexToMove + 1 < newArr.length ) {
//             elemsNearMine.push( index + indexToMove + 1 )
//             console.log('index + indexToMove + 1', index + indexToMove + 1)
//             console.log(el)
//         }
//
//     }
// } )
// matrix.forEach( el => {
//     el.forEach( elem => {
//         if ( !elem ) {
//             numbersYY.push( 0 )
//         } else {
//             numbersYY.push( 1 )
//         }
//     } );
// } );
// // console.log( 'numbersYY', numbersYY )
// console.log( 'elemsNearMine', elemsNearMine )
// console.log( 'mineIndex', mineIndex )
// elemsNearMine.forEach( ( el, index ) => {
//     if ( numbersYY.includes() ) {
//         numbersYY[el]++;
//     }
//
// } )
// return numbersYY;
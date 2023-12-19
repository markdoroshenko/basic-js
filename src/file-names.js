const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    const nameCounts = {};
    const result = [];

    function getUniqueName(name, count) {
        const newName = count === 0 ? name : `${name}(${count})`;

        if (nameCounts[newName] !== undefined) {
            return getUniqueName(name, count + 1);
        }

        nameCounts[newName] = 1;
        return newName;
    }

    names.forEach((name) => {
        result.push( getUniqueName(name, 0));
    });

    return result;
}

console.log( 'renameFiles', renameFiles( [ "file", "file", "image", "file(1)", "file" ] ) )
module.exports = {
    renameFiles
};

// } else if ( resArr.includes( setObj[el] ) ) {
//     console.log( 'setObj[el]', setObj[el] )
//     resArr.push( `${ el }(${ setObj[el] })` )
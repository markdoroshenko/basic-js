const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth( arr ) {
        let maxDepth = 1;
        arr.forEach( el => {
            if ( Array.isArray( el ) ) {
                const depth = 1 + this.calculateDepth(el);
                maxDepth = Math.max(maxDepth, depth);
            }
        } )
        return maxDepth;
    }
}
const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]))
module.exports = {
    DepthCalculator
};

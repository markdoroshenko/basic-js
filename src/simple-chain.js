const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    links: [],
    getLength() {
        return this.links.length;
    },
    addLink(value) {
        this.links.push(value);
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.links.length || !Number.isInteger(position)) {
            this.links = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.links.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.links.reverse();
        return this;
    },
    finishChain() {
        if (this.links.length === 0) {
            return '';
        }

        let str = '';
        this.links.forEach((el, index) => {
            if (index === 0) {
                str += `( ${el} )`;
            } else if (index === this.links.length - 1) {
                str += `~~( ${el} )`;
            } else {
                str += `~~( ${el} )`;
            }
        });

        this.links = [];
        return str;
    }
};
console.log(typeof chainMaker)
module.exports = {
    chainMaker
};

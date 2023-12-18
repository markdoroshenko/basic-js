const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(normalOrder = true) {
        this.normalOrder = normalOrder;
    }

    toEqual(str, key) {
        let newKey = key.toLowerCase();
        while (newKey.length < str.length) {
            newKey += key.toLowerCase();
        }
        return newKey.slice(0, str.length);
    }

    encrypt(str, key) {
        if (!str || !key) {
            throw new Error('Incorrect arguments!');
        }

        let newKey = this.toEqual(str, key);
        let cureStr = str.replace(/[^a-zA-Z]/g, '');
        let encrypted = '';
        let encryptedRes = '';
        let count = 0;

        for (let i = 0; i < cureStr.length; i++) {
            const ACode = 'A'.charCodeAt(0);
            const charsSum =
                (cureStr[i].toUpperCase().charCodeAt(0) - ACode) +
                (newKey[i].toUpperCase().charCodeAt(0) - ACode);
            encrypted += String.fromCharCode((charsSum % 26) + ACode);
        }

        for (let i = 0; i < str.length; i++) {
            if (!/[a-zA-Z]/.test(str[i])) {
                count++;
                encryptedRes += str[i];
            } else {
                encryptedRes += encrypted[i - count] ? encrypted[i - count] : '';
            }
        }

        if (!this.normalOrder) {
            return encryptedRes.split('').reverse().join('');
        }
        return encryptedRes;
    }


    decrypt( str, key ) {
        if ( !str || !key ) {
            throw new Error( 'Incorrect arguments!' )
        }
        let newKey = this.toEqual(str, key);
        let cureStr = (str.replace( /[^a-zA-Z]/g, '' )).toLowerCase();
        let decrypted = '';
        let decryptedRes = '';
        let count = 0;

        for ( let i = 0; i < cureStr.length; i++ ) {
            const ACode = 'a'.charCodeAt( 0 );
            const charsDif = (cureStr[i].charCodeAt( 0 ) - ACode) < (newKey[i].charCodeAt( 0 ) - ACode) ?
                (cureStr[i].charCodeAt( 0 ) - ACode + 26) - (newKey[i].charCodeAt( 0 ) - ACode) :
                (cureStr[i].charCodeAt( 0 ) - ACode) - (newKey[i].charCodeAt( 0 ) - ACode)
            decrypted += String.fromCharCode( (charsDif % 26) + ACode );
        }

        for ( let i = 0; i < str.length; i++ ) {
            if ( !/[a-zA-Z]/.test( str[i] ) ) {
                debugger
                count++;
                decryptedRes += str[i];
            } else {
                decryptedRes += decrypted[i - count] ? decrypted[i - count] : '';
            }
        }
        if (!this.normalOrder) {
            return decryptedRes.toUpperCase().split('').reverse().join('');
        }
        return decryptedRes.toUpperCase();
    }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine( false );
directMachine.encrypt( 'Samelengthkey', 'Samelengthkey' )
console.log('decr', directMachine.encrypt( 'Samelengthkey', 'Samelengthkey' ))


module.exports = {
    VigenereCipheringMachine
};

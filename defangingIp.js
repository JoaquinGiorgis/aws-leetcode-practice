/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function (address) {
    let result = ''

    for (let i = 0; i < address.length; i++) {
        const char = address[i];

        if (char === '.') {
            result += '[.]'
        } else {
            result += char
        }
    }

    return result;
};
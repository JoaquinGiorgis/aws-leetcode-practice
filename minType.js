/**
 * @param {string} word
 * @return {number}
 */

var minTimeToType = function (word) {
    let totalTime = 0;
    let prevChar = 'a';

    for (const char of word) {
        const from = prevChar.charCodeAt(0) - 'a'.charCodeAt(0)
        const to = char.charCodeAt(0) - 'a'.charCodeAt(0)
        const distance = Math.abs(from - to)
        const moveTime = Math.min(distance, 26 - distance)

        totalTime += moveTime + 1
        prevChar = char
    }

    return totalTime;
};
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const line1 = new Set('qwertyuiop')
    const line2 = new Set('asdfghjkl')
    const line3 = new Set('zxcvbnm')

    const res = []

    for (const w of words) {
        const lower = w.toLowerCase();
        const target =
            line1.has(lower[0]) ? line1 :
                line2.has(lower[0]) ? line2 : line3

        let ok = true;
        for (const ch of lower) {
            if (!target.has(ch)) {
                ok = false
                break;
            }
        }
        if (ok) res.push(w);
    }

    return res;

};
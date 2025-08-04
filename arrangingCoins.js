/**
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function (n) {
    let left = 0, right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const total = (mid * (mid + 1)) / 2

        if (total === n) return mid
        if (total < n) left = mid + 1
        else right = mid - 1
    }

    return right;
};
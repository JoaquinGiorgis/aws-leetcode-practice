
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
        return root.val === targetSum
    }

    const newTarget = targetSum - root.val;

    return (
        hasPathSum(root.left, newTarget) ||
        hasPathSum(root.right, newTarget)
    )
};
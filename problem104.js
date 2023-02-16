// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
    if (root == null) return 0;
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};
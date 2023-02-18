// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    if (root == null) return null;
    invertTree(root.left);
    invertTree(root.right);
    tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;
    return root;
};
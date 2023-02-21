// https://leetcode.com/problems/binary-tree-inorder-traversal/

var traverse = function(root, list) {
    if (root == null) return;
    traverse(root.left, list);
    list.push(root.val);
    traverse(root.right, list);
};

var inorderTraversal = function(root) {
    if (root == null) return [];
    var order = [];
    traverse(root, order);
    return order;
};
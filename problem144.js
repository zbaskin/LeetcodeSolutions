// https://leetcode.com/problems/binary-tree-preorder-traversal/

var traverse = function(root, list) {
    if (root == null) return;
    list.push(root.val);
    traverse(root.left, list);
    traverse(root.right, list);
}

var preorderTraversal = function(root) {
    if (root == null) return [];
    var order = [];
    traverse(root, order);
    return order;
};
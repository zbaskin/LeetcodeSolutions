// https://leetcode.com/problems/binary-tree-postorder-traversal/

var traverse = function(root, list) {
    if (root == null) return;
    traverse(root.left, list);
    traverse(root.right, list);
    list.push(root.val);
}

var postorderTraversal = function(root) {
    if (root == null) return [];
    var order = [];
    traverse(root, order);
    return order;
};
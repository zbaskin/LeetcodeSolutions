// https://leetcode.com/problems/binary-tree-paths/

var traverse = function(root, list, string) {
    if (root == null) return;
    string += "->" + root.val;
    traverse(root.left, list, string);
    traverse(root.right, list, string);
    if (root.left == null && root.right == null) list.push(string);
};

var binaryTreePaths = function(root) {
    if (root == null) return [];
    var initVal = root.val.toString();
    if (root.left == null && root.right == null) return [initVal];
    var paths = [];
    traverse(root.left, paths, initVal);
    traverse(root.right, paths, initVal);
    return paths;
};
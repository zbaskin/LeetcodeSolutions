// https://leetcode.com/problems/same-tree/

function getTree(node, array) {
    if (node == null) return;
    array.push(node.val);
    if (node.left != null) getTree(node.left, array);
    else if (node.right != null ) array.push(null);
    if (node.right != null) getTree(node.right, array);
} 

var isSameTree = function(p, q) {
    var pArray = [];
    var qArray = [];
    getTree(p, pArray);
    getTree(q, qArray);
    return JSON.stringify(pArray) == JSON.stringify(qArray);
};
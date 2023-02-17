// https://leetcode.com/problems/minimum-distance-between-bst-nodes/

function BSTList(root, list) {
    if (root == null) return;
    BSTList(root.left, list);
    list.push(root.val);
    BSTList(root.right, list);
}

var minDiffInBST = function(root) {
    if (root == null) return;
    var list = [];
    BSTList(root, list);

    var min = Number.MAX_VALUE;
    console.log(min);
    for (let i = 0; i < list.length - 1; i++) {
        min = Math.min(min, list[i + 1] - list[i]);
    }
    
    return min;
};
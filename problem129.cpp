// https://leetcode.com/problems/sum-root-to-leaf-numbers/

class Solution {
public:
    int traverse(TreeNode* root, int sum) {
        if (root == NULL) return 0;
        sum = (sum * 10) + root->val;
        if (root->left == NULL && root->right == NULL) return sum;
        int left = traverse(root->left, sum);
        int right = traverse(root->right, sum);
        return left + right;
    }

    int sumNumbers(TreeNode* root) {
        int sum = 0;
        return traverse(root, sum);
    }
};
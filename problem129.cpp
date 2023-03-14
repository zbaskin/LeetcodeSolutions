// https://leetcode.com/problems/sum-root-to-leaf-numbers/

using namespace std;
#define NULL 0

class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
};

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
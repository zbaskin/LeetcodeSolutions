// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    return nums.sort((a, b) => { return a - b });
};
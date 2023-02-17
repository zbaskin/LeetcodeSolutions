// https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {
    var i = nums.length - 1;
    while (i >= 0) {
        if (nums[i] == val) nums.splice(i, 1);
        i--;
    }
    return nums.length;
};
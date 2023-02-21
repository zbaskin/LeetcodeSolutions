// https://leetcode.com/problems/single-element-in-a-sorted-array/

var singleNonDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) return nums[i];
    }
};
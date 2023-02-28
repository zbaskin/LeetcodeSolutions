// https://leetcode.com/problems/first-missing-positive/

var firstMissingPositive = function(nums) {
    var missing = 1;
    nums = nums.sort((a, b) => { return a - b }).filter(function(x) { return x > 0 });
    let i = 0;
    console.log(nums);
    while (missing == nums[i]) {
        if (nums[i] != nums[i + 1]) missing++;
        i++;
    }
    return missing;
};
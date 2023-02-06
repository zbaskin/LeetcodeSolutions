// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    var shuffledArray = [];
    for (let i = 0; i < n; i++) {
        for (let x = i; x < nums.length; x += n) {
            shuffledArray.push(nums[x]);
        }
    }
    return shuffledArray;
};
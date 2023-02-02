// https://leetcode.com/problems/permutations/

var permute = function(nums) {
    var permutations = [];
    let iterate = (arr, temp) => {
        if (arr.length == 0) {
            permutations.push(temp);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            iterate(arr.filter((num, index) => index != i), [...temp, arr[i]]);
        }
    }
    iterate(nums, []);
    return permutations;
};
// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {
    if (n <= 1) return 1;
    var step1 = 1;
    var step2 = 1
    var totalSteps = 0;
    for (let i = 2; i <= n; i++) {
        totalSteps = step1 + step2;
        step1 = step2;
        step2 = totalSteps;
    }
    return totalSteps;
};
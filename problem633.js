// https://leetcode.com/problems/sum-of-square-numbers/

var judgeSquareSum = function(c) {
    if (c == 0) return true;
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    while (a <= b) {
        let sum = (a * a) + (b * b);
        if (sum == c) return true;
        else if (sum > c) b--;
        else a++;
    }
    return false;
};
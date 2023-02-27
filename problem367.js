// https://leetcode.com/problems/valid-perfect-square/

var isPerfectSquare = function(num) {
    for (let i = 0; i <= 46340; i++) {
        let sq = i * i;
        if (sq == num) return true;
        if (sq > num) return false;
    }
    return false;
};
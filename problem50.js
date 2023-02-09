// https://leetcode.com/problems/powx-n/

var myPow = function(x, n) {
    if (n == 0 || x == 1 || (x == -1 && n % 2 == 0)) return 1;
    if (x == -1 && n % 2 == 1) return -1;
    var exp = x;
    for (let i = 1; i < Math.abs(n); i++) {
        exp *= x;
    }
    
    if (n < 0) return 1/exp;

    return exp;
};
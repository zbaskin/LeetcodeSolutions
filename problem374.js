// https://leetcode.com/problems/guess-number-higher-or-lower/

var guessNumber = function(n) {
    var left = 0;
    var mid = Math.floor(n / 2);
    var right = n;
    var g = guess(mid);
    while (g != 0 && left < right) {
        if (g == 1) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
            g = guess(mid);
        }
        if (g == -1) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
            g = guess(mid);
        }
    }
    return mid;
};
// https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    var negative = x < 0;
    var reverseArray = x.toString().split('').reverse();
    if (negative) reverseArray.splice(0, -1);
    var reverse = parseInt(reverseArray.join(''));
    if (reverse > 0x7FFFFFFF) return 0;
    if (negative) reverse = 0 - reverse;
    return reverse;
};
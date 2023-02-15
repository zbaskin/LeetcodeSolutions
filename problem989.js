// https://leetcode.com/problems/add-to-array-form-of-integer/

var addToArrayForm = function(num, k) {
    var n1 = num.join("");
    /*for (let i = 0; i < num.length; i++) {
        n1 *= 10;
        n1 += num[i];
    }*/
    var sum = BigInt(n1) + BigInt(k);
    var newNum = [];
    var length = sum.toString().length;
    for (let i = 0; i < length; i++) {
        let digit = sum % 10n;
        newNum.push(digit);
        sum = (sum - digit) / 10n;
    }
    return newNum.reverse();
};
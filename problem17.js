// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(digits) {
    if (digits == '') return [];
    var phoneMap = {
        '2' : "abc",
        '3' : "def",
        '4' : "ghi",
        '5' : "jkl",
        '6' : "mno",
        '7' : "pqrs",
        '8' : "tuv",
        '9' : "wxyz",
    }
    var combos = [];
    var temp = [];
    var length = digits.length;
    let iterate = (index) => {
        if (index == length) {
            combos.push(temp.join(''));
            return;
        }
        let digit = digits[index];
        let charStr = phoneMap[digit];
        for (let i = 0; i < charStr.length; i++) {
            temp.push(charStr[i]);
            iterate(index + 1)
            temp.pop();
        }
    }
    iterate(0);
    return combos;
};
// https://leetcode.com/problems/add-digits/

var addDigits = function(num) {
    var sum = 0;
    var loop = true;
    while (loop) {
        let temp = num.toString().split('');
        sum = 0;
        for (let i = 0; i < temp.length; i++) {
            sum += parseInt(temp[i]);
        }
        num = sum;
        if (sum.toString().length == 1) loop = false;
    }
    return sum;
};
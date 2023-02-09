// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    if (s.trim() == '') return true;
    var regex = /[^A-Za-z0-9]/g;
    var x = s.replace(regex, '').toLowerCase().split('');
    return JSON.stringify(x) == JSON.stringify(x.reverse());
};
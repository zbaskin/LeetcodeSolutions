// https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function(head) {
    var x = [];
    while (head != null) {
        x.push(head.val)
        head = head.next;
    }
    return JSON.stringify(x) == JSON.stringify(x.reverse());
};
// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    if (head == null) return null;
    var newHead = null;
    while (head != null) {
        let temp = new ListNode(head.val, newHead);
        newHead = temp;
        head = head.next;
    }
    return newHead;
};
// https://leetcode.com/problems/remove-linked-list-elements/

var removeElements = function(head, val) {
    if (head == null) return null;
    while (head != null && head.val == val) {
        head = head.next;
    }
    var temp = head;
    var prev = temp;
    while (temp != null) {
        if (temp.val == val) {
            prev.next = temp.next;
            temp = prev.next;
        } else {
            prev = temp;
            temp = temp.next;
        }
    }
    return head;
};
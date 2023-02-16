// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        switch (char) {
            case '(':
            case '[':
            case '{':
                stack.push(char);
                break;
            case ')':
                if (stack.length == 0 || stack.pop() != '(') return false;
                break;
            case ']':
                if (stack.length == 0 || stack.pop() != '[') return false;
                break;
            case '}':
                if (stack.length == 0 || stack.pop() != '{') return false;
                break;
        }
    }
    return stack.length == 0;
};
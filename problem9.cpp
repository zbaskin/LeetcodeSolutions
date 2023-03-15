// https://leetcode.com/problems/palindrome-number/

using namespace std;
#include <string>

class Solution {
public:
    bool isPalindrome(int x) {
        std::string s = std::to_string(x);
        std::string r;
        for (int i = s.length() - 1; i >= 0; i--) {
            r += s[i];
        }
        return s == r;
    }
};
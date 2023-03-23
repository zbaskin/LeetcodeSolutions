// https://leetcode.com/problems/backspace-string-compare/

using namespace std;
#include <string>

class Solution {
public:
    bool backspaceCompare(string s, string t) {
        string s2;
        string t2;
        for (char i : s) {
            if (i == '#') {
                if (s2.length() > 0) s2.pop_back();
            } else {
                s2 += i;
            }
        }
        for (char i : t) {
            if (i == '#') {
                if (t2.length() > 0) t2.pop_back();
            } else {
                t2 += i;
            }
        }
        return s2 == t2;
    }
};
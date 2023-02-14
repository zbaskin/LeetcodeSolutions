// https://leetcode.com/problems/is-subsequence/

class Solution {
    public boolean isSubsequence(String s, String t) {
        int count = 0;
        int lastChar = 0;
        for (int i = 0; i < s.length(); i++) {
            if (t.indexOf(s.charAt(i)) == -1) return false;
            for (int j = lastChar; j < t.length(); j++) {
                if (s.charAt(i) == t.charAt(j)) {
                    count++;
                    lastChar = j + 1;
                    j = t.length();
                }
            }
        }
        return (s.length() == count);
    }
}
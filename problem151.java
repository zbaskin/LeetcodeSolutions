// https://leetcode.com/problems/reverse-words-in-a-string/

class Solution {
    public String reverseWords(String s) {
        String[] words = s.trim().replaceAll(" +", " ").split(" ");
        String[] reverse = new String[words.length];
        for (int i = 0; i < words.length; i++) {
            reverse[words.length - i - 1] = words[i];
        }
        return String.join(" ", reverse);
    }
}
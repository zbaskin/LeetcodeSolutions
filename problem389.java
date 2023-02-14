// https://leetcode.com/problems/find-the-difference/

class Solution {
    public char findTheDifference(String s, String t) {
        if (s.length() == 0) return t.charAt(0);
        for (int i = 0; i < t.length(); i++) {
            char letter = t.charAt(i);
            if (s.indexOf(letter) == -1) return letter;
            s = s.replaceFirst(String.valueOf(letter), "");
        }
        return '0';
    }
}

/*
    class Solution {
        public char findTheDifference(String s, String t) {
            char c[]=s.toCharArray();
            char d[]=t.toCharArray();
            
            Arrays.sort(c);
            Arrays.sort(d);

            for(int i=0;i<c.length;i++){
                if(c[i]!=d[i]) return d[i];
            }
            return d[d.length-1];
        }
    }
*/
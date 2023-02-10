// https://leetcode.com/problems/ugly-number/

class Solution {
    public boolean isUgly(int n) {
        if (n <= 0) return false;
        int num = n;
        for (int i = 2; i <= 7; i++) {
            System.out.println(num);
            if (num < 2) break;
            while (num % i == 0) {
                num = num / i;
            }
            if (i > 5) return false;
        }
        return true;
    }
}
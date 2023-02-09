// https://leetcode.com/problems/sqrtx/

class Solution {
    public int mySqrt(int x) {
        int n = 0;
        int nMax = 46340;
        
        while (x > (n * n)) {
            n += 1;
            if (n > nMax) return nMax;
        }

        if ((n * n) > x) return n - 1;
        return n;
    }
}
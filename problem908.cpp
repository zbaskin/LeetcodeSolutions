// https://leetcode.com/problems/smallest-range-i/

using namespace std;
#include <vector>

class Solution {
public:
    int smallestRangeI(vector<int>& nums, int k) {
        int m = nums[0], n = nums[0];
        for (int num : nums) {
            m = max(m, num);
            n = min(n, num);
        }
        return max(0, m - n - 2 * k);
    }
};

/*

class Solution {
public:
    int smallestRangeI(vector<int>& nums, int k) {
        int mean = 0;
        for (int i = 0; i < nums.size(); i++) {
            mean += nums[i];
        }
        mean = mean / nums.size();
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > mean) nums[i] -= k;
            else nums[i] += k;
        }
        int min = 100000, max = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > max) max = nums[i];
            if (nums[i] < min) min = nums[i];
        }
        return max - min;
    }
};

*/
// https://leetcode.com/problems/monotonic-array/

using namespace std;
#include <vector>

class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        if (nums.size() == 1) return true;
        int i = 1;
        while (nums[0] == nums[i] && i < nums.size() - 1) {
            i++;
        }
        bool asc = (nums[0] < nums[i]) ? true : false;
        if (asc) {
            for (int a = 1; a < nums.size(); a++) {
                if (nums[a - 1] > nums[a]) return false;
            }
        } else {
            for (int d = 1; d < nums.size(); d++) {
                if (nums[d - 1] < nums[d]) return false;
            }
        }
        return true;
    }
};
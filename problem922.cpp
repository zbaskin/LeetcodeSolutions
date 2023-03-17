// https://leetcode.com/problems/sort-array-by-parity-ii/

using namespace std;
#include <vector>

class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& nums) {
        vector<int> even, odd;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] % 2 == 0) even.push_back(nums[i]);
            else odd.push_back(nums[i]);
        }

        int e = 0, o = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i % 2 == 0) {
                nums[i] = even[e];
                e++;
            } else {
                nums[i] = odd[o];
                o++;
            }
        }
        return nums;
    }
};

/*
First Attempt: Time Limit Exceeded

class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& nums) {
        for (int i = 0; i < nums.size(); i++) {
            int temp;
            bool even = (nums[i] % 2 == 0) ? true : false;
            if (i % 2 == 0) {
                if (!even) {
                    for (int j = i; j < nums.size(); j++) {
                        if (nums[j] % 2 == 0) {
                            temp = nums[j];
                            nums[j] = nums[i];
                            nums[i] = temp;
                        }
                    }
                }
            } else {
                if (even) {
                    for (int j = i; j < nums.size(); j++) {
                        if (nums[j] % 2 == 1) {
                            temp = nums[j];
                            nums[j] = nums[i];
                            nums[i] = temp;
                        }
                    }
                }
            }
        }
        return nums;
    }
};

*/
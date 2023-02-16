// https://leetcode.com/problems/merge-sorted-array/

var merge = function(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = nums1.length - 1;
    while (j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
// https://leetcode.com/problems/largest-triangle-area/

using namespace std;
#include <vector>

class Solution {
public:
    double largestTriangleArea(vector<vector<int>>& points) {
        double max = INT_MIN;
        double area = 0;
        double x1, x2, x3, y1, y2, y3;
        int size = points.size();
        for (int i = 0; i < size; i++) {
            x1 = points[i][0];
            y1 = points[i][1];
            for (int j = i + 1; j < size; j++) {
                x2 = points[j][0];
                y2 = points[j][1];
                for (int k = j + 1; k < size; k++) {
                    x3 = points[k][0];
                    y3 = points[k][1];
                    area = 0.5 * abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
                    if (area > max) max = area;
                }
            }
        }
        return max;
    }
};
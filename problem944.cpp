// https://leetcode.com/problems/delete-columns-to-make-sorted/

using namespace std;
#include <vector>
#include <string>

class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
        vector<string> columns;
        for (int i = 0; i < strs[0].length(); i++) {
            string column;
            for (int j = 0; j < strs.size(); j++) {
                column += strs[j][i];
            }
            columns.push_back(column);
        }
        int rmv = 0;
        for (string word : columns) {
            for (int i = 0; i < word.length() - 1; i++) {
                if (int(word[i + 1]) < int(word[i])) {
                    rmv++;
                    break;
                }
            }
        }
        return rmv;
    }
};
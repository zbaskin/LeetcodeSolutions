// https://leetcode.com/problems/uncommon-words-from-two-sentences/

using namespace std;
#include <vector>
#include <sstream>
#include <string>
#include <unordered_map>

class Solution {
public:
    vector<string> uncommonFromSentences(string s1, string s2) {
        unordered_map<string, int> wordCount;
        istringstream iss(s1 + " " + s2);
        while (iss >> s1) wordCount[s1]++;
        vector<string> uncommon;
        for (auto word : wordCount) {
            if (word.second == 1) uncommon.push_back(word.first);
        }
        return uncommon;
    }
};
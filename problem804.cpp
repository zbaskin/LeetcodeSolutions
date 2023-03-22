// https://leetcode.com/problems/unique-morse-code-words/

using namespace std;
#include <vector>
#include <string>

class Solution {
public:
    int uniqueMorseRepresentations(vector<string>& words) {
        vector<string> letters = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
        ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        vector<string> morseWords;
        for (string word : words) {
            string morse;
            for (char letter : word) {
                morse += letters[int(letter) - 97];
            }
            if (find(morseWords.begin(), morseWords.end(), morse) == morseWords.end()) {
                morseWords.push_back(morse);
            }
        }
        return morseWords.size();
    }
};
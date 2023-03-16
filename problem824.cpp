// https://leetcode.com/problems/goat-latin/

using namespace std;
#include <string>
#include <sstream>

class Solution {
public:
    string toGoatLatin(string sentence) {
        string goat;
        string word;
        string a = "a";

        stringstream ss(sentence);
        while(ss >> word) {
            if (
                word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u' ||
                word[0] == 'A' || word[0] == 'E' || word[0] == 'I' || word[0] == 'O' || word[0] == 'U'
            ) {
                goat += word + "ma";
            } else {
                goat += word.substr(1) + word[0] + "ma";
            }
            
            goat += a + " ";
            a += "a";
        }

        return goat.substr(0, goat.size() - 1);
    }
};
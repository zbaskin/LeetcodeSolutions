// https://leetcode.com/problems/ransom-note/description/

var canConstruct = function(ransomNote, magazine) {
    var magArray = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        let index = magArray.indexOf(char);
        if (index == -1 && magazine.length > 0) return false;
        magArray.splice(index, 1);
    }
    return true;
};
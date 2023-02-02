// https://leetcode.com/problems/verifying-an-alien-dictionary/

var isAlienSorted = function(words, order) {
    let alphabet = {};
    for (let i = 0; i < order.length; i++) {
        alphabet[order[i]] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length) return false;
            
            let letter1 = words[i][j];
            let letter2 = words[i + 1][j];
            if (letter1 == letter2) continue;
            
            let pos1 = alphabet[letter1];
            let pos2 = alphabet[letter2];
            if (pos1 < pos2) break;
            else return false;
        }
    }
    
    return true;
};

/*
var alphabet = order.split('');
var sortedWords = words.sort(function(a, b) {
    console.log(a,b);
    return alphabet[a] - alphabet[b];
    //return (orderArray[a] > orderArray[b]) ? 1 : (orderArray[a] < orderArray[b]) ? -1 : 0;
});
console.log(words);
console.log(sortedWords);
*/
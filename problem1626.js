// https://leetcode.com/problems/best-team-with-no-conflicts/

var bestTeamScore = function(scores, ages) {
    let arr = [];
    for (let i = 0; i < scores.length; i++) {
        arr.push([ages[i], scores[i]]);
    }
    arr.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);

    let res = new Array(scores.length).fill(0);
    res[0] = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
        let [fa, fs] = arr[i];
        res[i] = fs;
        for (let j = i - 1; j >= 0; j--) {
            let [sa, ss] = arr[j];
            if (sa == fa) res[i] = Math.max(res[i], res[j] + fs);
            else {
                if (fs >= ss) {
                    res[i] = Math.max(res[i], res[j] + fs);
                }
            }
        }
    }

    return Math.max(...res);

};

/*
// Failure 2:
var totals = new Map();
for (let i = 0; i < ages.length; i++) {
    let score = totals.get(ages[i])
    if (score) {
        if (score < scores[i]) {
            totals.set(ages[i], scores[i]);
        } else if (score == scores[i]) {
            totals.set(ages[i], score + scores[i]);
        }
    } else {
        totals.set(ages[i], scores[i]);
    }
}
var keys = Array.from(totals.keys());
var values = Array.from(totals.values());

console.log(keys, values);
// -------------------------------------------------
// Failure 1:
var totals = [];
var total = 0;
bubble(ages, scores);
console.log(ages);
console.log(scores);
for (let i = 0; i < ages.length; i++) {
    if (ages[i] == ages[i - 1]) {
        if (scores[i] > scores[i - 1]) break;
    }
    if (ages[i] > ages[i - 1] && scores[i] < scores[i - 1]) {
        totals.push(total);
        total = scores[i];
    } else {   
        total += scores[i];
    }
}
totals.push(total);
console.log(totals);
totals.sort();
return totals.slice(-1);
*/

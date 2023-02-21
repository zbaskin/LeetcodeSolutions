// https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {
    var pascal = [[1]];
    for (let i = 1; i < numRows; i++) {
        let temp = [];
        let prevRow = pascal[i - 1];
        temp.push(1);
        for (let j = 1; j < i; j++) {
            let n1 = prevRow[j - 1];
            let n2 = prevRow[j];
            temp.push(n1 + n2);
        }
        temp.push(1);
        pascal.push(temp);
    }
    return pascal;
};
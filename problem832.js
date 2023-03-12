// https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();
        for (let j = 0; j < image[0].length; j++) {
            image[i][j] = (image[i][j]) ? 0 : 1;
        }
    }
    return image;
};
/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    //code here
    let newStr = '';
    let count=1;
    let current = str[0];
    for (let i = 1; i < str.length+1; i++) {
        if (str[i] == current) count++;
        else {
            if (count > 1) {
                newStr += current;
                newStr += count;
            } else {
                newStr += current;
            }
            count = 1;
            current = str [i];
        }

    }
    return newStr;

}

module.exports = rle;

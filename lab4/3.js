/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let i = 0;
    let newStr = ''
    while (i < str.length) {
        re = RegExp(`${str[i]}+`);
        let str1 = re.exec(str.slice(i));
        newStr += str[i];
        if (str1[0].length > 1) {
            newStr += str1[0].length;
        }
        i += str1[0].length;
    }
    return newStr;
}

module.exports = rle;
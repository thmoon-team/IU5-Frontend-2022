/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let n_str = '';
    let counter = 0;
    let temp_char = str[0];
    for (let i = 0; i <= str.length; ++i) {
        if (str[i] == temp_char) {
            counter++;
        } else {
            if (counter > 1) {
                n_str += temp_char;
                n_str += counter;
            } else {
                n_str += temp_char;
            }
            counter = 1;
            temp_char = str[i];
        }
    }
    return n_str;
}

module.exports = rle;
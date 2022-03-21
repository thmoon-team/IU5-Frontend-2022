/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let result = ''
    let count = 1

    for (let i = 0; i < str.length; ++i) {
        if (str[i] !== str[i+1]) {
            result += count > 1 ? `${str[i]}${count}` : `${str[i]}`
            count = 1
        } else {
            count++
        }
    }

    return result
}

module.exports = rle;

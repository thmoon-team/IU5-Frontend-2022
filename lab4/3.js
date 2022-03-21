/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    return (str.match(/([\w])\1*/g) || []).map((e) => (e.length === 1 ? e : e.charAt(0) + e.length)).join("");
}

module.exports = rle;

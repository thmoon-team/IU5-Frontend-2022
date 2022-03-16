/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */

function getMinMax(str) {
    let numbers = [];
    let start = 0;
    let end = 0;
    for (; start != -1; start = str.search(/-?\d+(\.\d+)?/)) {
        end = 1 + str.slice(start).search(/\d\b[^\.]/);
        if (!end) end = 1 + str.slice(start).search(/\d\b/);
        numbers.push(parseFloat(str.substring(start, start + end)));
        str = str.slice(start + end);
    }
    result = {
        max: Math.max(...numbers), 
        min: Math.min(...numbers)
    };
    return result;
}

module.exports = getMinMax;

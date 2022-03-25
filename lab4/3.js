/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    return str.split('').reduce( function(result, value, index, arr) {
        if (result[result.length - 2] === value) {
            result[result.length - 1] = result[result.length - 1] + 1;
            return result;
        }
        if (result[result.length - 1] < 2) result.pop();
        result.push(value);
        if (index != arr.length - 1) result.push(1);
        return result;
    }, []).join('');
}

module.exports = rle;
console.log(rle('BCCADDEEEBB'));
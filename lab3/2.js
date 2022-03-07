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
    const result = {
        min: null,
        max: null
    }

    str.replace(',', '')
    .replace(']', '')
    .split(' ')
    .map(number => Number(number))
    .filter(number => !Number.isNaN(number))
    .forEach(number => {
        if (result.min > number || !result.min) result.min = number
        if (result.max < number || !result.max) result.max = number  
    })

    return result
}

module.exports = getMinMax;

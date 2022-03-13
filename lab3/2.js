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
    let regx = str.match(/-?\d+(\.\d+)?/g).map((str) => parseFloat(str));
// match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением
// map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
    let max = regx[0]
    let min = regx[0]
    for (let i = 0; i < regx.length; i++) {
        if (max < regx[i])
            max = regx[i]
        else if (min > regx[i])
            min = regx[i]
    }
    return {'min': min, 'max': max};
}

module.exports = getMinMax;

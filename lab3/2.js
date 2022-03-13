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
    // code here
    str = str.replace(/[^0-9,.-]/g, ' ');
    str=str.split(" ");
    let min;
    let max;
    min=Number(str[0]);
    max=Number(str[0]);
    for (let i=1;i<str.length;i++){
        str[i] = Number(str[i]);
        if ((str[i] > max) && (typeof str[i] == "number")) max = str[i];
        if ((str[i] < min) && (typeof str[i] == "number")) min = str[i];
    }
    return {'min': min, 'max': max};
}

module.exports = getMinMax;

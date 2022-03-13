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
    let min;
    let max;
    str = str.split(/[\ :!&?;,\]]/);
    min = 1000000000;
    max = -1000000000;

    for(let i = 1; i < str.length; i++){
        str[i] = Number(str[i]);
        if((str[i] > max) && (typeof str[i] == "number")) 
            max = str[i];
        if((str[i] < min) && (typeof str[i] == "number")) 
            min = str[i];
    }
    return {'min': min, 'max': max};

}

module.exports = getMinMax;

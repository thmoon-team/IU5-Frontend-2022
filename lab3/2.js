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
    let MinMax = {min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER}
    function numbers(number){
        if (+number < MinMax.min){
            MinMax.min = +number;
        }
        if (+number > MinMax.max){
            MinMax.max = +number;
        }
    }
    str.replace(/[0-9-.]+/g, numbers);
    return MinMax;
}

module.exports = getMinMax;

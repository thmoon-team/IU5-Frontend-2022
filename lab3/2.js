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
    let max_number = Number.MIN_SAFE_INTEGER;
    let min_number = Number.MAX_SAFE_INTEGER;
    let number = '';
    let t_num = 0;
    for(let i = 0; i < str.length; ++i){
        if (+str[i] || str[i] == '.' || str[i] == '-'){// я так понимаю, что точка это не знак препинания
            number += str[i];
        }
        else{
            t_num = +number;//чтоб функцию часто не вызывать
            if (min_number > t_num){
                min_number = t_num;
            }
            if (max_number < t_num){
                max_number = t_num;
            }
            number = '';
        }
    }
    return {min: min_number, max: max_number};
}

module.exports = getMinMax;

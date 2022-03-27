/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566' -> {min: -134, max: 566}
 */

function getMinMax(str) {
    // перевод чисел из строки в массив
    let arr = [];
    let flag = false;
    let val, k;
    for (let i = 0; i < str.length; i++) {
        if ( (!(isNaN(Number.parseInt(str[i]))))) {
            for (k = i; k < str.length; k++) {
                if (!(isNaN(Number.parseInt(str[k])))) continue;
                else if ((str[k] == '.') && !(isNaN(Number.parseInt(str[k+1])))) flag = true;
                else break;
            }
            if (flag == false) val = Number.parseInt(str.slice(i, k));
            else val = Number.parseFloat(str.slice(i, k));

            if (i != 0) {
                if (str[i-1] == '-') val = val*(-1);
            } 
            else {
                if (str[i] == '-') val = val*(-1);
            }
            let a = arr.push(val);
        }
        else continue;
        i = k;
    }

    // нахождение минимума и максимума
    let max = arr[0], min = arr[0];
    for (let s = 0; s < arr.length; s++) {
        if (arr[s] > max) max = arr[s];
        else if (arr[s] < min) min = arr[s];
    }
    res = {
        'min': min,
        'max': max
    }
    return res;
}

module.exports = getMinMax;
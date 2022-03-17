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
    let array = str.split(/[\ ,\]]/);
    let mini = maxi = +array[0];
    for (let i = 0; i <= array.length; i++) {
        let num = +array[i];
        if (num < mini) mini = num;
        if (num > maxi) maxi = num;
  }
  return {min: mini, max: maxi};
}

module.exports = getMinMax;

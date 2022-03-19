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
    let strr = str.replace(/[^0-9-.]/g,' ');
    let mas = strr.split(" ");
    let max_x = mas[0];
    let min_x = mas[0];
    let sdr = [];
    let sum = 0;
    max_x = Number(max_x);
    min_x = Number(min_x);
    for (let num = 1; num < mas.length; num++)
    {

        if (mas[num]/mas[num] == 1 ){

            mas[num] = Number(mas[num]);

            if (max_x < mas[num] ){

                max_x = mas[num];
            }
            if (min_x > mas[num]){

                min_x = mas[num];
            }
        }
    }
    return {min: min_x,
        max:max_x}

}

module.exports = getMinMax;

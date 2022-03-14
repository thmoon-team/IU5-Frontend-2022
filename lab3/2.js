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
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++){
        arr[i] = parseFloat(arr[i]);
    }
    for (let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            arr.splice(i,1);
        }
    }


    const max = Math.max(...arr);
    const min = Math.min(...arr);


    return {max, min};
}


module.exports = getMinMax;






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
    let splitted = str.split(" ");
    l=splitted.length;
    for (let i=0; i<l; i++){
        splitted[i] = parseFloat(splitted[i]);
    }
    splitted=splitted.filter(Boolean);
    let x=splitted[0];
    let y=splitted[0];
    for ( i=1; i<l; i++){
      if (splitted[i]<x){
          x=splitted[i];
      }
      if (splitted[i]>y){
          y=splitted[i];
      }
    }
    str = {
        min: x,
        max: y,
    };
    return str;
}

module.exports = getMinMax;

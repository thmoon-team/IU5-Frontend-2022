/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    //code here
    let str_1 = str.split("");
    let mas = [];
    let kolvo = [];
    let symbol = [];
    let c = 1;
    for (let num = 0; num< str_1.length; num++){
        if (num == 0){
            symbol.push(str_1[num]);
        }
        else if (str[num] != str[num-1]){
            symbol.push(str[num]);
        }
        if (str[num] == str[num+1]){
            c++;
        }
        else {

            kolvo.push(c);
            c = 1;
        }
    }
    for (let index = 0; index < symbol.length; index++){
        mas.push(symbol[index]);
        if (kolvo[index] >1){
            mas.push(kolvo[index]);
        }
    }

    return mas.join("");
}

module.exports = rle;

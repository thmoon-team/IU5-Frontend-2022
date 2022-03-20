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
    str = str.split('')
    let sum = 1
    let newStr = ''
    if (str.length >1){
        for( let i = 1; i<str.length;i++){
            if (str[i] == str[i-1]){
                sum++;
            } else {
                if (sum>1){
                    newStr+= String(str[i-1]) + String(sum)
                    sum=1
                } else{
                    newStr += String(str[i-1])
                    sum=1
                }
            }
        }
        if (sum>1){
            newStr+= String(str[str.length - 1]) + String(sum)
            return newStr
        } else{
            newStr += String(str[str.length -1])
            return newStr
        }
    } else{
        return str.join('')
    }
}

module.exports = rle;

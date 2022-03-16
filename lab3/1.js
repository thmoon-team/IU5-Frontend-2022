/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let a = str.split(" ");
    let n=a.length;
    str= "";
    for(let i=0; i<n; i++){
        let word = a[i];
        str=str +word[0].toUpperCase() +word.slice(1);
    if(i<n-1){
        str+=" ";
    }
}
    return str;
}
module.exports = capitalize;

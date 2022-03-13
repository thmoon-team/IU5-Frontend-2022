/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
 function capitalize(str) {
    const splitted = str.split(" ");
    l=splitted.length;
    str = "";
    for (let i=0; i<l; i++){
        let word  = splitted[i];
        str=str +word[0].toUpperCase() + word.slice(1);
    if (i<l-1){
        str+=" ";
    }
}

    return str;
}
module.exports = capitalize;

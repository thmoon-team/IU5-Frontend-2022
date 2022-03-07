/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let words = str.split(' ');
    for(let i = 0; i < words.length; ++i){
        words[i] = words[i].split('');
        words[i][0] = words[i][0].toUpperCase();
        words[i] = words[i].join('');
    }
    newStr = words.join(' ');
    return newStr;
}

module.exports = capitalize;
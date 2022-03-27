/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if ( (i == 0) || (str.charAt(i-1) == ' ') ) res += str[i].toUpperCase();
        else res += str[i];
    }
    return res;
}

module.exports = capitalize;
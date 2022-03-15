/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    str = str.split(' ')
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    // charAt() возвращает указанный символ из строки.
    // slice() возвращает новый массив, содержащий копию части исходного массива.
    return str.join(' ');
}

module.exports = capitalize;

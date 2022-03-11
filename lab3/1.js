/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function capitalize(str) {
    if (str.length) str = str.replaceAt(0, str.charAt(0).toUpperCase());
    let step = 0;
    for (let pos = 1; step != -1; pos += 1 + step) {
        str = str.replaceAt(pos, str.charAt(pos).toUpperCase());
        step = str.slice(pos).search(/\s\S/);
    }
    return str;
} 

module.exports = capitalize;

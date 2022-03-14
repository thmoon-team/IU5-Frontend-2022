/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    function lowerToHyphenUpper(match) {
        match[0] = match[0].toUpperCase()
        return match[0].toUpperCase() + match.slice(1);
    }
    return str.replace(/[А-ЯЁа-яёa-zA-Z]+/g, lowerToHyphenUpper)
}
module.exports = capitalize;
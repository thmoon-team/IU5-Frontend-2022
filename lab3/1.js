/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
 function capitalize(str) {
    str = " " + str;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            str = str.substr(0, i) +" "+ str[i+1].toUpperCase() + str.substr(i + 2);
        }
    }
    str = str.slice(1);
    return str;
}

module.exports = capitalize;

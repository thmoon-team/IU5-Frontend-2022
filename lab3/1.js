/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let i = 0;
    let buff = "";
    let buffStr = "";
    while (i < str.length) {
        if (i == 0 && str[0] != " ") { /*Условие для первого символа*/
            buff = str[0];
            buffStr += buff.toUpperCase();
        }
        else if (str[i - 1] == " ") { /*Если первая буква слова*/
            buff = str[i];
            buffStr += buff.toUpperCase();

        }
        else {
            buffStr += str[i]; /*Если не первая буква слова*/
        }
        i++;
    }
    return buffStr;
}



module.exports = capitalize;

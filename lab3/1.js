/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let strArray = str.split(' ');
    let resStr = '';
    for (let index = 0; index < strArray.length; ++index) {
        let word = strArray[index];  
        resStr = resStr + word[0].toUpperCase() + word.slice(1);
        if (index != strArray.length - 1) {
            resStr = resStr + ' '; 
        }
    }
    return resStr;
}

module.exports = capitalize;

/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let array_numbers = str.split(' ');//разбиваем на отдельные слова
    for(let i = 0; i < array_numbers.length; ++i){
        array_numbers[i] = array_numbers[i].split(''); // разбиваем на отдельные буквы, т.к. напрямую обратиться нельзя
        array_numbers[i][0] = array_numbers[i][0].toUpperCase();//делаем большую букву
        array_numbers[i] = array_numbers[i].join('');//соединяем буквы в слово
    }
    return array_numbers.join(' ');//соединяем слова в предложение
}

module.exports = capitalize;
/* .split    .join     .toUpperCase*/


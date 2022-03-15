/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    const objBrackets = {
        '[': ']',
        '<': '>',
        '(': ')'
    };
    let arr = str.split('');
    let index = 0;
    while (arr.length > 0) {
        if (index == arr.length - 1) {
            return false;
        }
        if ((Object.keys(objBrackets).indexOf(arr[index]) != -1) &&
            (Object.values(objBrackets).indexOf(arr[index + 1]) != -1) &&
            (arr[index + 1] != objBrackets[arr[index]])) {
            return false;
        }
        if ((Object.keys(objBrackets).indexOf(arr[index]) != -1) &&
            (Object.values(objBrackets).indexOf(arr[index + 1]) != -1) &&
            (arr[index + 1] == objBrackets[arr[index]])) {
            arr.splice(index, 2);
            if (index > 0) {
                index -= 1;
            }
        } else {
            index += 1;
        }
    }

    return true;
}

module.exports = checkBrackets;
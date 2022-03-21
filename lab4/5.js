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
    const stack = [];
    const openBrackets = ['(', '[', '<'];
    const closeBrackets = [')', ']', '>'];
    for (const bracket of str) {
        if (openBrackets.includes(bracket)) {
            stack.push(bracket);
        }
        if (closeBrackets.includes(bracket)) {
            if (stack.length != 0 && stack[stack.length - 1] === openBrackets[closeBrackets.indexOf(bracket)]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length;
}

module.exports = checkBrackets;

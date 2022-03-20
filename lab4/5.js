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
    if (str.length % 2) return false;
    let queue = [];
    for (elem of str) {
        if ('[(<'.includes(elem)) {
            queue.push(elem === '[' ? ']' : elem === '(' ? ')' : '>');
            continue;
        }
        elem === queue[queue.length - 1] ? queue.pop() : elem = '';
        if (!elem) return false;
    }
    return true;
}

module.exports = checkBrackets;
console.log(checkBrackets('[(()[])<(<>)>]'));

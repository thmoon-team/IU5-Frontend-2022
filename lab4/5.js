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
    //code here
    while (str.includes("()") || str.includes("[]") || str.includes("<>")) {
        str = str.replace("()", "");
        str = str.replace("[]", "");
        str = str.replace("<>", "");
        }
        return((str.length == 0)? true : false)
    }

module.exports = checkBrackets;

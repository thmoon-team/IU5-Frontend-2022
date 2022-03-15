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
    let t_str = JSON.parse(JSON.stringify(str));
    t_str = t_str.split('');
    let check1 = 1;
    let check2 = 0;
    while (check1 == 1) {
        for (let i = 0; i < t_str.length - 1; ++i) {
            if (t_str[i] == '[' && t_str[i + 1] == ']' || t_str[i] == '(' && t_str[i + 1] == ')' || t_str[i] == '<' && t_str[i + 1] == '>') {
                t_str.splice(i, 2);
                check2 = 1;
            }
        }
        if (check2 == 1) {
            check2 = 0;
        } else {
            check1 = 0;
        }
    }
    if (t_str.length == 0) {
        return Boolean(1);
    } else {
        return Boolean(0);
    }
}
//({}()())<>   {(})
module.exports = checkBrackets;
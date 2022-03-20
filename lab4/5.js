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
    str = str.split('')
    check = Array();
    for (let i = 0, k = 0; i < str.length; i++) {
        if (str[i] === '[' || str[i] === '(' || str[i] === '<') {
            check.push(str[i])
            k++

        }
        else if (
            str[i] === ']' && check[k-1] === '[' ||
            str[i] === ')' && check[k-1] === '(' ||
            str[i] === '>' && check[k-1] === '<' 
        )
        {
           k--;
           check.pop();
        } 
        else 
        {
            return false
        }        
    }
     
    if (check.length === 0) return true
    else return false;
}

module.exports = checkBrackets;

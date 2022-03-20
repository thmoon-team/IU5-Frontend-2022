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
    let str_arr = str.split('')
    let open = ['[','(','<']
    let close = [']',')','>']
    let check = []          // массив для проверки соответствия
    let open_index          // индекс откр. 
    let close_index         // индекс закр.

    
    for(let i = 0; i < str_arr.length; i++) {
        
        open_index = open.indexOf(str_arr[i])
        if (open_index != -1) {
            check.push(open_index)
        }

        // проверяем соответствие закр. ск. с откр. cк.
        close_index = close.indexOf(str_arr[i])
        if (close_index != -1) {
            // про
            open_index = check.pop()
            if (close_index != open_index) {
                return false
            }
        }
    }

    return check.length == 0
}

module.exports = checkBrackets;

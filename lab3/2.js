/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */

// решение через regexp скучное, решил потыкать язык
function getMinMax(str) {
    let numbers = [];
    let temp = "";
    let isFloat = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            isFloat = true;
        }

        if (!isNaN(parseInt(str[i], 10)) || str[i] === "-" || str[i] === ".") {
            temp = temp + str[i];
        } else if (temp !== "" && !isNaN(temp)) {
            let number;

            if (isFloat) {
                number = Number.parseFloat(temp);
            } else {
                number = Number.parseInt(temp, 10);
            }

            numbers.push(number);
            temp = "";
            isFloat = false;
        }
    }

    let result = {
        min: Math.min.apply(null, numbers),
        max: Math.max.apply(null, numbers),
    };
    return result;
}

module.exports = getMinMax;

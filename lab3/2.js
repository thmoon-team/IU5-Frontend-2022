/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let buffer_out = { "min": 0, "max": 0 };
    let buff = "";
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= "0" && str[i] <= "9") || str[i] == "-" || str[i] == ".") {
            buff += str[i]; /* проверяю коды переменных и заполняю временную переменную числа*/
            continue;
        }
        
        if (Number(buff)) { /*Если преобразование в число удалось*/
            if (buffer_out.min > Number(buff)) {
                buffer_out.min = Number(buff);
            }               /*выбор минимума и максимума */
            if (buffer_out.max < Number(buff)) {
                buffer_out.max = Number(buff);
            }

        }
        buff = "";
    }

    return buffer_out;
}

module.exports = getMinMax;

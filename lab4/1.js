/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let key
    let obj = {}
    for (let el of arr) {                      
        key = el.toLowerCase().split('').sort().join('');
        if (obj[key]) {                  
            obj[key] = [...obj[key], el]
        } else {
            obj[key] = [el]
        }
    }
    return Object.keys(obj).map(value => obj[value]);
}

module.exports = getAnagramms;

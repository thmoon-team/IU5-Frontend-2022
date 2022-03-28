/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    //code here
    res = [];
    check = [];
    arr.map((current, index) => {
        newStr = current.toLowerCase().split('').sort().join('');
        if (check.indexOf(newStr) === -1) {
            check.push(newStr);
            res.push([]);
        }
    });
    arr.map((current, index) => {
        id = check.indexOf(current.toLowerCase().split('').sort().join(''));
        if (id != -1)
            res[id].push(current);
    })
    return res;
}

module.exports = getAnagramms;

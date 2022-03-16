/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function findAllEntries(arr, el) {
    const indices = [];
    let idx = arr.indexOf(el);
    while (idx != -1) {
        indices.push(idx);
        idx = arr.indexOf(el, idx + 1);
    }
    return indices;
}

function getAnagramms(arr) {
    const sortedEntries = arr.map((word) => word.toLowerCase().split("").sort().join(""));
    const result = [];
    Array.from(new Set(sortedEntries)).map((entry) => result.push(findAllEntries(sortedEntries, entry)));
    return result.map((entries) => entries.map((index) => arr[index]));
}

module.exports = getAnagramms;

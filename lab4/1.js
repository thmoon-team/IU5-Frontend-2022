/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let groups = {};
    arr.map( function(word) {
        let key = word.toLowerCase().split('').sort();
        groups[key] ? groups[key].push(word) : groups[key] = [word];
    } );
    return Object.values(groups);
}

module.exports = getAnagramms;
console.log(getAnagramms(['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']));

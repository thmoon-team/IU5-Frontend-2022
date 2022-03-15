/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let map = new Map();
    arr.map(function(word) {
        let newWord = word.toLowerCase().split("").sort().join("");
        if (!map.has(newWord)) {
            map.set(newWord, [word])
        } else {
            map.get(newWord).push(word);
        }
    });
    let resArr = new Array();
    for (let key of map.keys()) {
        resArr.push(map.get(key));
    }
    return resArr;
}

module.exports = getAnagramms;
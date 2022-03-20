/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    const res = {}
    
    for (let i = 0; i < arr.length; ++i) {
       const key = arr[i].toLowerCase().split('').sort().join('')
       res[key] = res[key] ? [...res[key], arr[i]] : [arr[i]]
    }

    return Object.keys(res)
    .filter(key => res[key].length > 1)
    .map(key => res[key])
}

module.exports = getAnagramms;

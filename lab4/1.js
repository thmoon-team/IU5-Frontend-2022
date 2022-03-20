/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    //code here
    let newArr = []
    let arrSort = []
    let arrSort1 = []
    let arrWords = Array()
    let arr1 = []
    let tempArr
    let tempWord
    for (let i = 0; i < arr.length; i++) {
        tempWord = arr[i].toLowerCase().split('').sort().join('')
        arrSort.push(tempWord)
    }
    for (let i = 0; i < arrSort.length; ++i) {
        if (arrSort.indexOf(arrSort[i]) == i) {
            for (let j = 0; j < arrSort.length; ++j) {
                if (arrSort[i] == arrSort[j]) {
                    arr1.push(arr[j]);
                }
            }
            newArr.push(arr1);
            arr1 = [];
        }
    }
    return newArr
}

module.exports = getAnagramms;

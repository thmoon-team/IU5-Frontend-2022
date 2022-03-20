/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            get1DArray(arr[i]);
            for (let j = 0; j < arr[i].length; j++) {
                arr.splice(i, 0, arr[i][j]);
                i++;
            }
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

module.exports = get1DArray;
//console.log(get1DArray([[[1,2]]]));
console.log(get1DArray([1, 2, 'aa', [1, 2, 3], [ [1, 2], [1, 2] ], [ [ [1, 2, [1, 2, [2]]], 3], 4]]));